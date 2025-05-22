import { sajuData } from "@/data/sajuData";
import { Column, RowKey } from "@/types/saju";

const rowHeaders: { label: string; key: RowKey }[] = [
  { label: "十星\n(십성)", key: "天干十星" },
  { label: "天干\n(천간)", key: "天干" },
  { label: "地支\n(지지)", key: "地支" },
  { label: "十星\n(십성)", key: "地支十星" },
  { label: "十二運星\n(십이운성)", key: "十二運星" },
  { label: "十二神殺\n(십이신살)", key: "十二神殺" },
  { label: "貴人\n(귀인)", key: "貴人" },
];

const colHeaders: Column[] = ["時", "日", "月", "年"];

const getColRightBorder = (col: Column) =>
  ["時", "日", "月"].includes(col)
    ? "1px solid rgba(138, 138, 138, 0.35)"
    : "1px solid black";
const getRowBottomBorder = (rowIdx: number) =>
  rowIdx === 1 ? "1px solid rgba(138, 138, 138, 0.35)" : "1px solid black";

export default function SajuTable() {
  return (
    <table className="w-full table-fixed border-collapse leading-[100%] border-none">
      <thead>
        <tr>
          <th className="w-12 h-11.25 border-b border-black"></th>
          {colHeaders.map((col) => {
            return (
              <th
                key={col}
                className={`h-11.25 border-t-0 border-b border-black font-bold text-center text-xl`}
                style={{
                  borderLeft: "1px solid black",
                  borderRight: getColRightBorder(col),
                }}
              >
                {col}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {rowHeaders.map(({ label, key }, rowIdx) => (
          <tr key={key}>
            <th
              className="w-12 whitespace-pre-line text-center"
              style={{
                borderTop: "none",
                borderLeft: "none",
                borderRight: "1px solid black",
                borderBottom: getRowBottomBorder(rowIdx),
              }}
            >
              <div className="text-xs leading-tight">
                {label.split("\n")[0]}
              </div>
              <div className="text-[8px] font-bold leading-tight">
                {label.split("\n")[1]}
              </div>
            </th>

            {colHeaders.map((col) => {
              const cellData = sajuData[col]?.[key];

              // const borderRightStyle = hasGrayRightBorder(col)
              //   ? "1px solid rgba(138, 138, 138, 0.35)"
              //   : "1px solid black";

              if (!cellData) {
                return (
                  <td
                    key={col}
                    className="text-center align-middle bg-white"
                    style={{
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: getColRightBorder(col),
                      borderBottom: getRowBottomBorder(rowIdx),
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-[10px] font-bold">
                      (없음)
                    </div>
                  </td>
                );
              }

              return (
                <td
                  key={col}
                  className="pt-1.25 pb-1.25 text-center align-middle bg-white"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: getColRightBorder(col),
                    borderBottom: getRowBottomBorder(rowIdx),
                  }}
                >
                  <div className="w-full h-full flex flex-col gap-1.5 items-center justify-center text-center">
                    {cellData.map((item, i) => {
                      const hasBg =
                        ["天干", "地支"].includes(key) && item.bgColor;
                      const isWhiteBg =
                        item.bgColor?.toLowerCase() === "#f9f9f9";

                      return (
                        <div
                          key={i}
                          className={`flex flex-col items-center justify-center ${
                            hasBg
                              ? "aspect-square w-full max-w-[48px] rounded-xl"
                              : ""
                          }`}
                          style={
                            hasBg
                              ? {
                                  backgroundColor: item.bgColor,
                                  color: isWhiteBg ? "#000" : "#fff",
                                  border: isWhiteBg ? "1px solid #000" : "none",
                                }
                              : {}
                          }
                        >
                          {item.texts.map((t, j) => {
                            let textSizeClass = "text-[10px]";
                            if (hasBg) {
                              if (j === 0 && t.type === "phonetic")
                                textSizeClass = "text-[8px]";
                              else if (j === 1 && t.type === "character")
                                textSizeClass = "text-[25px]";
                              else if (j > 1 && t.type === "element")
                                textSizeClass = "text-[8px]";
                            } else {
                              textSizeClass =
                                t.type === "character"
                                  ? "text-sm leading-tight"
                                  : t.type === "annotation"
                                  ? "text-[10px] leading-tight font-bold"
                                  : "text-[10px]";
                            }

                            const value =
                              t.type === "annotation"
                                ? `(${t.value})`
                                : t.value;

                            return (
                              <div key={j} className={textSizeClass}>
                                {value}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

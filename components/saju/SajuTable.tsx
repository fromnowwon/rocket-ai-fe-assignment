import { sajuData } from "@/data/sajuData";
import { Column, RowKey } from "@/types/saju";

const rowHeaders: { label: string; key: RowKey }[] = [
  { label: "十星\n(십상)", key: "십상" },
  { label: "天干\n(천간)", key: "천간" },
  { label: "地支\n(지지)", key: "지지" },
  { label: "十星\n(십성)", key: "십성" },
  { label: "十二運星\n(십이운성)", key: "십이운성" },
  { label: "十二神殺\n(십이신살)", key: "십이신살" },
  { label: "貴人\n(귀인)", key: "귀인" },
];

const colHeaders: Column[] = ["時", "日", "月", "年"];

export default function SajuTable() {
  return (
    <table className="w-full table-fixed border-collapse">
      <thead>
        <tr>
          <th className="w-12"></th>
          {colHeaders.map((col) => (
            <th
              key={col}
              className="border border-gray-300 font-bold text-center align-center text-xl"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowHeaders.map(({ label, key }) => (
          <tr key={key}>
            <th className="border border-gray-300 w-12 whitespace-pre-line text-center">
              <div className="text-[10px] leading-tight">
                {label.split("\n")[0]}
              </div>
              <div className="text-[8px] text-gray-600 leading-none">
                {label.split("\n")[1]}
              </div>
            </th>
            {colHeaders.map((col) => {
              const cellData = sajuData[col]?.[key];

              if (!cellData) {
                return (
                  <td
                    key={col}
                    className="border text-center align-middle bg-white"
                  >
                    <div className="w-full h-full flex items-center justify-center text-center text-[10px]">
                      (없음)
                    </div>
                  </td>
                );
              }

              return (
                <td
                  key={col}
                  className="p-1.5 border text-center align-middle bg-white"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center text-center">
                    {cellData.map((item, i) => {
                      const hasBg =
                        ["천간", "지지"].includes(key) && item.bgColor;
                      const isWhiteBg =
                        item.bgColor?.toLowerCase() === "#f9f9f9";

                      return (
                        <div
                          key={i}
                          className={`flex flex-col items-center justify-center leading-[100%] ${
                            hasBg
                              ? "aspect-square w-full max-w-[48px] rounded-md"
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
                                  ? "text-sm"
                                  : "text-[10px]";
                            }

                            return (
                              <div key={j} className={textSizeClass}>
                                {t.value}
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

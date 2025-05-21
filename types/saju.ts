export type Column = "時" | "日" | "月" | "年";

export type RowKey =
  | "십상"
  | "천간"
  | "지지"
  | "십성"
  | "십이운성"
  | "십이신살"
  | "귀인";

export type CellItem = {
  texts: string[];
  bgColor?: string;
};

export type CellData = CellItem[] | null;

export type SajuData = {
  [col in Column]: {
    [row in RowKey]: CellData;
  };
};

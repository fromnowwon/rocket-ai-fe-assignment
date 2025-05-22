export type Column = "時" | "日" | "月" | "年";

export type RowKey =
  | "十上"
  | "天干"
  | "地支"
  | "十性"
  | "十二運星"
  | "十二神殺"
  | "貴人";

export type TextType = "character" | "phonetic" | "element" | "annotation";

export type TextItem = {
  type: TextType;
  value: string;
};

export type CellItem = {
  texts: TextItem[];
  bgColor?: string;
};

export type CellData = CellItem[] | null;

export type SajuData = {
  [col in Column]: {
    [row in RowKey]: CellData;
  };
};

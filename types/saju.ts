export type Column = "時" | "日" | "月" | "年";

export type RowKey =
  | "天干十星"
  | "天干"
  | "地支"
  | "地支十星"
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

export type ColumnData = {
  [row in RowKey]: CellData;
};

export type SajuData = {
  userName: string;
  data: {
    [col in Column]: ColumnData;
  };
};

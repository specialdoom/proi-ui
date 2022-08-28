export type Column = {
  key: number;
  value: string;
}

export type TableData = {
  property: string;
  description: string;
  type: string;
  default: string;
}

export type Config = {
  title: string;
  columns: Column[];
  tableData: TableData;
  usage: string;
}
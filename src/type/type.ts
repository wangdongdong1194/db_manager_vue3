export interface IDatabase {
  name: string;
  children?: IDatabase[];
}

export interface IElTreeNode {
  id: number;
  name: string;
  children?: IElTreeNode[];
  toggled?: boolean;
  selected?: boolean;
  depth?: number;
}

export interface ClassDescription {
  category: string,
  isAcceptable: boolean,
  title: string,
  desc: string,
  examples: string,
  preparingRules: string[],
};

export interface Category {
  [key: string]: ClassDescription;
};
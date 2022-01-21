export interface IEditDiv extends HTMLDivElement {
  isFocus: boolean;
  insertText(text: string, isIndex?: boolean, idx?: number[]): void;
}

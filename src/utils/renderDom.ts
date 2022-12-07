import {Block} from "../services/Block";

export function renderDOM(query: string, block: Block | null) {
  const root = document.querySelector(query);
  if (!root) {
    throw new Error(`ДОМ элемент ${query} не найден`);
  }
  if (!block) {
    throw new Error(`Нет Блока ${block}`);
  }
  root.prepend(block.getContent());
  block.dispatchComponentDidMount();
  return root;
}

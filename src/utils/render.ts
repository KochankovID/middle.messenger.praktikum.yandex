import { IBlock } from "./block/iblock";

export function render(node: HTMLElement, block: IBlock) {
  let rendered = document.querySelector("#rendered");

  const newNode = block.render();
  newNode.id = "rendered";

  if (rendered === null) {
    node.append(newNode);
  } else {
    if (rendered.outerHTML !== newNode.outerHTML) {
      rendered.remove();
      node.append(newNode);
    }
  }
}

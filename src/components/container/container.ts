import { IBlock } from "../../utils/block/iblock";
import { ContainerTagBlock } from "../../utils/block/container-tag-block";

export function container(
  elementClass: string[] | string,
  children: (IBlock | string)[]
): IBlock {
  if (typeof elementClass === "string") {
    elementClass = [elementClass];
  }
  return new ContainerTagBlock({
    tagName: "div",
    attributes: {
      class: elementClass,
    },
    children: children,
  });
}

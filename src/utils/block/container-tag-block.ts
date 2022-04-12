import { InnerTagProperties, TagBlock, TagProperties } from "./base-tag-block";
import { IBlock } from "./iblock";

export type ContainerProperties = {
  attributes?: {
    class?: string[];
    [key: string]: any;
  };
  callbacks?: { [key: string]: (event: Event) => boolean };
  children?: (IBlock | string)[];
};

export type ContainerTagProperties = TagProperties & {
  children?: (IBlock | string)[];
};
export type InnerContainerTagProperties = InnerTagProperties & {
  children: (IBlock | string)[];
};

export class ContainerTagBlock extends TagBlock<InnerContainerTagProperties> {
  constructor(props: ContainerTagProperties) {
    super(ContainerTagBlock.makeProps(props));
  }

  static makeProps(props: ContainerTagProperties): InnerContainerTagProperties {
    return {
      tagName: props.tagName ?? "div",
      attributes: {
        ...props.attributes,
        class: props.attributes?.class ?? [],
      },
      callbacks: props.callbacks ?? {},
      children: props.children ?? [],
    };
  }

  render(): HTMLElement {
    const node = super.render();
    if (this.props.children !== undefined) {
      for (let children of this.props.children) {
        if (typeof children === "string") {
          node.append(document.createTextNode(children));
        } else {
          node.append(children.render());
        }
      }
    }
    return node;
  }
}

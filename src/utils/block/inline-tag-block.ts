import { InnerTagProperties, TagBlock, TagProperties } from "./base-tag-block";

export type InlineProperties = {
  attributes?: {
    class?: string[];
    [key: string]: any;
  };
  callbacks?: { [key: string]: (event: Event) => boolean };
};

export type InlineTagProperties = TagProperties;
export type InnerInlineTagProperties = InnerTagProperties;

export class InlineTagBlock extends TagBlock<InnerInlineTagProperties> {
  constructor(props: InlineTagProperties) {
    super(InlineTagBlock.makeProps(props));
  }

  static makeProps(props: InlineTagProperties): InnerInlineTagProperties {
    return {
      tagName: props.tagName ?? "div",
      attributes: {
        class: props.attributes?.class ?? [],
        ...props.attributes,
      },
      callbacks: props.callbacks ?? {},
    };
  }
}

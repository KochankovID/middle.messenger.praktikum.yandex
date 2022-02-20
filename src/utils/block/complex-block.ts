import { Block } from "./block";
import { Classes, Styles } from "jss";
import { IBlock } from "./iblock";
import { InlineProperties } from "./inline-tag-block";

export abstract class ComplexBlock<
  T extends InlineProperties
> extends Block<T> {
  classes: Classes;
  block: IBlock<T>;
  static styles: Styles;

  constructor(props: T) {
    super(props);
    this.classes = this.setUpStyles();
    const block = this.build();

    block.props = {
      ...block.props,
      attributes: {
        ...block.props.attributes,
        ...this.props.attributes,
        class: [
          ...(block.props.attributes?.class ?? []),
          ...(this.props.attributes?.class ?? []),
        ],
      },
    };

    this.block = block as IBlock<T>;
  }

  abstract setUpStyles(): Classes;

  abstract build(): IBlock<InlineProperties>;

  render(): HTMLElement {
    return this.block.render();
  }
}

import { Block } from "./block";
import { Classes, Styles } from "jss";
import { IBlock } from "./iblock";
import { InlineProperties } from "./inline-tag-block";

export abstract class ComplexBlock<
  T extends InlineProperties
> extends Block<T> {
  rebuild: boolean = false;
  classes: Classes;
  block!: IBlock<T>;
  static styles: Styles;

  constructor(props: T) {
    super(props);
    this.classes = this.setUpStyles();
    this._build();
  }

  abstract setUpStyles(): Classes;

  abstract build(): IBlock<InlineProperties>;

  private _build() {
    const block = this.build();
    block.props = {
      ...block.props,
      ...this.props,
      attributes: {
        ...block.props.attributes,
        ...this.props.attributes,
        class: [
          ...(block.props.attributes?.class ?? []),
          ...(this.props.attributes?.class ?? []),
        ],
      },
      callbacks: {
        ...block.props.callbacks,
        ...this.props.callbacks,
      },
    };
    this.block = block as IBlock<T>;
  }

  render(): HTMLElement {
    if (this.rebuild) {
      this._build();
      this.rebuild = false;
    }
    return this.block.render();
  }
}

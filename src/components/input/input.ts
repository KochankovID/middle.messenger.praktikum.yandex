import {
  InlineProperties,
  InlineTagBlock,
} from "../../utils/block/inline-tag-block";

export class Input extends InlineTagBlock {
  private value: string = "";

  constructor(properties: InlineProperties) {
    super({
      tagName: "input",
      ...properties,
    });
    this.props.callbacks.input = (event: Event) => {
      this.value = (event.target as HTMLInputElement).value;
      return true;
    };
  }

  render(): HTMLElement {
    const element = super.render() as HTMLInputElement;
    element.value = this.value;
    return element;
  }
}

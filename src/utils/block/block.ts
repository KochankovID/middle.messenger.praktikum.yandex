import { IBlock } from "./iblock";

export abstract class Block<T extends {}> implements IBlock {
  public props: T;

  constructor(props: T) {
    this.props = props;
  }

  abstract render(): HTMLElement;
}

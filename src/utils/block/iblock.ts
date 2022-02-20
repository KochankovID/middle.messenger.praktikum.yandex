export interface IBlock<T extends {} = {}> {
  props: T;

  render(): HTMLElement;
}

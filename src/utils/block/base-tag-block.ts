import { Block } from "./block";

export type TagProperties = {
  tagName?: string;
  attributes?: {
    class?: string[];
    [key: string]: any;
  };
  callbacks?: { [key: string]: (event: Event) => boolean };
};

export type InnerTagProperties = {
  tagName: string;
  attributes: {
    class: string[];
    [key: string]: any;
  };
  callbacks: { [key: string]: (event: Event) => boolean };
  [key: string]: any;
};

export abstract class TagBlock<T extends InnerTagProperties> extends Block<T> {
  render(): HTMLElement {
    let node = document.createElement(this.props.tagName);

    if (this.props.attributes !== undefined) {
      for (let [attribute, value] of Object.entries(this.props.attributes)) {
        if (attribute === "class") {
          try {
            for (let elementClass of value) {
              node.classList.add(elementClass);
            }
          } catch {
            console.log(this.props.attributes.class);
          }
        } else {
          node.setAttribute(attribute, value);
        }
      }
    }

    if (this.props.callbacks !== undefined) {
      for (let [name, callback] of Object.entries(this.props.callbacks)) {
        node.addEventListener(name, callback);
      }
    }

    return node;
  }
}

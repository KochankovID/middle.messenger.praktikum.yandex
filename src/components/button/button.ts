import Block from "../../utils/block";
import "./button.sass";

const template = `
a.button(href=url)= text
`;

type ButtonProperties = {
  text: string;
  url: string;
  [key: string]: any;
};

export default class Button extends Block {
  constructor(properties: ButtonProperties) {
    super(template, properties);
  }
}

import Block from "../../utils/block";
import pug from "pug";
import "./form.sass";

const template = `
.form
  if title
      div.form__title
          h1= title
  form
      .form-content
        if block
          != block
`;

type FormProperties = {
  title: string;
  innerBlock?: string;
  [key: string]: any;
};

export default class Form extends Block {
  constructor(properties: FormProperties) {
    properties.block = pug.compile(properties?.innerBlock)();
    super(template, properties);
  }

  setInnerBlock(block: string) {
    this.props.block = block;
  }
}

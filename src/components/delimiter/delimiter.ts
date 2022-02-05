import Block from "../../utils/block";
import "./delimiter.sass";

const template = `
span.delimiter
`;

type DelimiterProperties = {
  [key: string]: any;
};

export default class Delimiter extends Block {
  constructor(properties?: DelimiterProperties) {
    super(template, properties);
  }
}

import Block from "../../utils/block";
import "./delimiter.sass";

const template = `
span.delimiter
`;

type DelimiterProperties = {};

export default class Delimiter extends Block<DelimiterProperties> {
  constructor(properties: DelimiterProperties) {
    super(template, properties);
  }
}

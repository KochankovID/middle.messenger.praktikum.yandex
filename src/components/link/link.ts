import Block from "../../utils/block";
import pug from "pug";
import "./link.sass";

const template = `
.link-container
    a.link(href=url)
    if block
      != block`;

type LinkProperties = {
  url: string;
  innerBlock?: string;
  [key: string]: any;
};

export default class Link extends Block {
  constructor(properties: LinkProperties) {
    properties.block = pug.compile(properties?.innerBlock)();
    super(template, properties);
  }

  setInnerBlock(block: string) {
    this.props.block = block;
  }
}

import Block from "../../utils/block";
import pug from "pug";
import "./link.sass";

const template = `
.link-container
    a.link(href=url)
    if block
      != block`;

type LinkProperties = {
  block?: string;
  url: string;
  innerBlock: string;
};

export default class Link extends Block<LinkProperties> {
  constructor(properties: LinkProperties) {
    properties.block = pug.compile(properties.innerBlock)();
    super(template, properties);
  }

  setInnerBlock(block: string) {
    this.props.block = block;
  }
}

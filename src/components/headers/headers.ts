import { themeClasses } from "../../app";
import {
  ContainerProperties,
  ContainerTagBlock,
} from "../../utils/block/container-tag-block";

export class H1 extends ContainerTagBlock {
  constructor(properties: ContainerProperties) {
    super({
      tagName: "h1",
      ...properties,
    });
    this.props.attributes.class.push(themeClasses.h1);
  }
}

export class H3 extends ContainerTagBlock {
  constructor(properties: ContainerProperties) {
    super({
      tagName: "h3",
      ...properties,
    });
    this.props.attributes.class.push(themeClasses.h3);
  }
}

export class H4 extends ContainerTagBlock {
  constructor(properties: ContainerProperties) {
    super({
      tagName: "h4",
      ...properties,
    });
    this.props.attributes.class.push(themeClasses.h4);
  }
}

import jss from "jss";
import { styles } from "./styles";
import {
  ContainerProperties,
  ContainerTagBlock,
} from "../../utils/block/container-tag-block";

export class Link extends ContainerTagBlock {
  constructor(properties: ContainerProperties) {
    super({
      tagName: "a",
      ...properties,
    });

    const { classes } = jss.createStyleSheet(styles).attach();
    this.props.attributes.class.push(classes.link);
  }
}

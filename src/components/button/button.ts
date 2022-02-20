import jss from "jss";
import { styles } from "./styles";
import {
  ContainerProperties,
  ContainerTagBlock,
} from "../../utils/block/container-tag-block";

export class Button extends ContainerTagBlock {
  constructor(properties: ContainerProperties) {
    super({
      tagName: "button",
      ...properties,
    });

    const { classes } = jss.createStyleSheet(styles).attach();
    this.props.attributes.class.push(classes.button);
  }
}

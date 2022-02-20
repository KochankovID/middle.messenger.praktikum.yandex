import jss from "jss";
import { styles } from "./styles";
import {
  InlineTagBlock,
  InlineTagProperties,
} from "../../utils/block/inline-tag-block";

export function delimiter(properties?: InlineTagProperties): InlineTagBlock {
  const block = new InlineTagBlock({
    tagName: "div",
    ...properties,
  });

  const { classes } = jss.createStyleSheet(styles).attach();
  block.props.attributes.class.push(classes.delimiter);

  return block;
}

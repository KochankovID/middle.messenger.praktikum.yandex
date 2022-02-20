import jss from "jss";
import { styles } from "./styles";
import { container } from "../container/container";
import { InlineTagBlock } from "../../utils/block/inline-tag-block";

export function preview() {
  const { classes } = jss.createStyleSheet(styles).attach();

  return container(classes.preview, [
    new InlineTagBlock({
      tagName: "img",
      attributes: {
        class: [classes.previewImage],
        src: "static/images/index/MacBookPro.png",
        alt: "Preview image",
      },
    }),
  ]);
}

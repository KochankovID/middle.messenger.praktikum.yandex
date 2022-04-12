import { container } from "../container/container";
import jss from "jss";
import { styles } from "./styles";
import { themeClasses } from "../../app";
import { InlineTagBlock } from "../../utils/block/inline-tag-block";
import { ContainerTagBlock } from "../../utils/block/container-tag-block";
import { IBlock } from "../../utils/block/iblock";

export function chatPreview(): IBlock {
  const { classes } = jss.createStyleSheet(styles).attach();

  return container(classes.chatPreview, [
    new InlineTagBlock({
      tagName: "i",
      attributes: {
        class: [themeClasses.iconPlanet],
      },
    }),
    new ContainerTagBlock({
      tagName: "p",
      attributes: {
        class: [classes.chatPreviewText],
      },
      children: ["Выберете чат"],
    }),
    new InlineTagBlock({
      tagName: "i",
      attributes: {
        class: [themeClasses.iconStar],
      },
    }),
  ]);
}

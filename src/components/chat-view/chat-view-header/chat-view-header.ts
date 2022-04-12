import { IBlock } from "../../../utils/block/iblock";
import jss from "jss";
import { styles } from "./styles";
import { container } from "../../container/container";
import { CircleAvatar } from "../../circle-avatar/circle-avatar";
import { H4 } from "../../headers/headers";
import { themeClasses } from "../../../app";
import { InlineTagBlock } from "../../../utils/block/inline-tag-block";

export function chatViewHeader(url: string, name: string): IBlock {
  const { classes } = jss.createStyleSheet(styles).attach();

  return container(classes.chatViewHeader, [
    container(classes.headerUserInfo, [
      new CircleAvatar({
        attributes: {
          class: [classes.circleAvatar],
        },
        url: url,
      }),
      new H4({
        children: [name],
      }),
    ]),
    new InlineTagBlock({
      tagName: "i",
      attributes: {
        class: [themeClasses.iconMore],
      },
    }),
  ]);
}

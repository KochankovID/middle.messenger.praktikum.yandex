import { IBlock } from "../../../utils/block/iblock";
import jss from "jss";
import { styles } from "./styles";
import { container } from "../../container/container";
import { themeClasses } from "../../../app";
import { InlineTagBlock } from "../../../utils/block/inline-tag-block";
import { Input } from "../../input/input";

export function chatViewFooter(): IBlock {
  const { classes } = jss.createStyleSheet(styles).attach();

  return container(classes.chatViewFooter, [
    new InlineTagBlock({
      tagName: "i",
      attributes: {
        class: [themeClasses.iconAttachFile],
      },
    }),
    new Input({
      attributes: {
        id: "message",
        type: "text",
        name: "message",
        placeholder: "Сообщение",
        class: [classes.input],
      },
    }),
    container(classes.iconSendBackground, [
      new InlineTagBlock({
        tagName: "i",
        attributes: {
          class: [themeClasses.iconSend, classes.iconSend],
        },
      }),
    ]),
  ]);
}

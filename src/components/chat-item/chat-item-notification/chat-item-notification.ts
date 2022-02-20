import { InlineProperties } from "../../../utils/block/inline-tag-block";
import jss, { Classes } from "jss";
import { styles } from "./styles";
import { ComplexBlock } from "../../../utils/block/complex-block";
import { IBlock } from "../../../utils/block/iblock";
import { container } from "../../container/container";
import { ContainerTagBlock } from "../../../utils/block/container-tag-block";

type ChatTimeNotificationProperties = InlineProperties & {
  notification: number;
};

export class ChatItemNotification extends ComplexBlock<ChatTimeNotificationProperties> {
  setUpStyles(): Classes {
    return jss.createStyleSheet(styles).attach().classes;
  }

  build(): IBlock {
    return container(this.classes.chatNotification, [
      new ContainerTagBlock({
        tagName: "span",
        children: [String(this.props.notification)],
      }),
    ]);
  }
}

import { InlineProperties } from "../../utils/block/inline-tag-block";
import jss, { Classes } from "jss";
import { styles } from "./styles";
import { IBlock } from "../../utils/block/iblock";
import { container } from "../container/container";
import { ComplexBlock } from "../../utils/block/complex-block";
import { CircleAvatar } from "../circle-avatar/circle-avatar";
import { H4 } from "../headers/headers";
import { ContainerTagBlock } from "../../utils/block/container-tag-block";
import { ChatItemTime } from "./chat-item-time/chat-item-time";
import { ChatItemNotification } from "./chat-item-notification/chat-item-notification";

type ChatItemProperties = InlineProperties & {
  url: string;
  name: string;
  sender: string;
  message: string;
  time: string;
  notification: number;
};

export class ChatItem extends ComplexBlock<ChatItemProperties> {
  setUpStyles(): Classes {
    return jss.createStyleSheet(styles).attach().classes;
  }

  build(): IBlock {
    return container(this.classes.chatListItem, [
      container(this.classes.itemPersonInfo, [
        new CircleAvatar({
          url: this.props.url,
          attributes: {
            class: [this.classes.circleAvatar],
          },
        }),
        container(this.classes.itemTitle, [
          new H4({
            attributes: {
              class: [this.classes.itemTitleText],
            },
            children: [this.props.name],
          }),
          new ContainerTagBlock({
            tagName: "span",
            attributes: {
              class: [this.classes.message],
            },
            children: [
              this.props.sender !== ""
                ? new ContainerTagBlock({
                    tagName: "b",
                    children: [this.props.sender],
                  })
                : "",
              " " + this.props.message,
            ],
          }),
        ]),
      ]),
      container(this.classes.itemMessageInfo, [
        this.props.notification !== 0
          ? new ChatItemNotification({
              notification: this.props.notification,
            })
          : "",
        new ChatItemTime({
          time: this.props.time,
          attributes: {
            class: [this.classes.itemTime],
          },
        }),
      ]),
    ]);
  }
}

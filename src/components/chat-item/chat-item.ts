import Block from "../../utils/block";
import CircleAvatar from "../circle-avatar/circle-avatar";
import "./chat-item.sass";
import ChatItemTime from "./__time/chat-item__time";
import ChatItemNotification from "./__notification/chat-item__notification";

const template = `
.chat-list__item
        .item-person-info
            != circleAvatar.element
            .item-title
                h4= name
                if sender !== ''
                    span
                        strong= sender
                        |  #{message}
                else
                    span= message
        .item-message-info
            if notification
                != chatItemNotification.element
            != chatItemTime.element
`;

type ChatItemProperties = {
  url: string;
  name: string;
  sender: string;
  message: string;
  time: string;
  notification: string;
  circleAvatar?: CircleAvatar;
  chatItemTime?: ChatItemTime;
  chatItemNotification?: ChatItemNotification;
};

export default class ChatItem extends Block<ChatItemProperties> {
  constructor(properties: ChatItemProperties) {
    properties.circleAvatar = new CircleAvatar({
      url: properties.url,
    });
    properties.chatItemTime = new ChatItemTime({
      time: properties.time,
    });
    properties.chatItemNotification = new ChatItemNotification({
      notification: properties.notification,
    });

    super(template, properties);
  }
}

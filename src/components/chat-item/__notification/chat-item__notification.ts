import Block from "../../../utils/block";
import "./chat-item__notification.sass";

const template = `
.chat-item__notification
    span= notification
`;

type ChatItemNotificationProperties = {
  notification: string;
};

export default class ChatItemNotification extends Block<ChatItemNotificationProperties> {
  constructor(properties: ChatItemNotificationProperties) {
    super(template, properties);
  }
}

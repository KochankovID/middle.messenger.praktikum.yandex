import Block from "../../../utils/block";
import "./chat-view__header.sass";
import CircleAvatar from "../../circle-avatar/circle-avatar";

const template = `
.chat-view__header
    .header-user-info
        != circleAvatar.element
        h4= name
    i.icon-more
`;

type ChatViewHeaderProperties = {
  url: string;
  name: string;
  [key: string]: any;
};

export default class ChatViewHeader extends Block {
  constructor(properties: ChatViewHeaderProperties) {
    properties.circleAvatar = new CircleAvatar({
      url: properties.url,
    });
    super(template, properties);
  }
}
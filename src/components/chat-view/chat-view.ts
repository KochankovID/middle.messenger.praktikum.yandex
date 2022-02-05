import Block from "../../utils/block";
import ChatViewHeader from "./__header/chat-view__header";
import Delimiter from "../delimiter/delimiter";
import ChatViewMessage from "./__message/chat-view__message";
import ChatViewFooter from "./__footer/chat-view__footer";

import "./chat-view.sass";

const template = `
.chat-view
    != chatViewHeader.element
    != delimiter.element
    .scroll-container
        .messages-column
            each message in messagesElements
                != message.element

    != delimiter.element
    != chatViewFooter.element
`;

type Message = {
  content: string;
  time: string;
  sender: number;
};

type ChatViewProperties = {
  url: string;
  name: string;
  messages: Message[];
  [key: string]: any;
};

export default class ChatView extends Block {
  constructor(properties: ChatViewProperties) {
    properties.chatViewHeader = new ChatViewHeader({
      url: properties.url,
      name: properties.name,
    });
    properties.messagesElements = [];
    for (let message of properties.messages) {
      properties.messagesElements.push(new ChatViewMessage(message));
    }
    properties.delimiter = new Delimiter();
    properties.chatViewFooter = new ChatViewFooter();

    super(template, properties);
  }
}

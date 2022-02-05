import Block from "../../../../utils/block";
import "./chat-view__message--text.sass";

const template = `
span.chat-view__message--text= text
`;

type ChatViewMessageTextProperties = {
  text: string;
  [key: string]: any;
};

export default class ChatViewMessageText extends Block {
  constructor(properties: ChatViewMessageTextProperties) {
    super(template, properties);
  }
}

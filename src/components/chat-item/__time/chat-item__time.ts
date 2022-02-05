import Block from "../../../utils/block";
import "./chat-item__time.sass";

const template = `
.chat-item__time
        span= time
`;

type ChatItemTimeProperties = {
  time: string;
  [key: string]: any;
};

export default class ChatItemTime extends Block {
  constructor(properties: ChatItemTimeProperties) {
    super(template, properties);
  }
}

import Block from "../../../utils/block";
import "./chat-item__time.sass";

const template = `
.chat-item__time
        span= time
`;

type ChatItemTimeProperties = {
  time: string;
};

export default class ChatItemTime extends Block<ChatItemTimeProperties> {
  constructor(properties: ChatItemTimeProperties) {
    super(template, properties);
  }
}

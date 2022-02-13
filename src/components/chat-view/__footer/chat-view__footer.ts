import Block from "../../../utils/block";
import "./chat-view__footer.sass";

const template = `
.chat-view__footer
        i.icon-attach-file
        input(id='message' type=text, name='message', placeholder="Сообщение")
        .icon-send-background
            i.icon-send
`;

type ChatViewFooterProperties = {};

export default class ChatViewFooter extends Block<ChatViewFooterProperties> {
  constructor(properties: ChatViewFooterProperties) {
    super(template, properties);
  }
}

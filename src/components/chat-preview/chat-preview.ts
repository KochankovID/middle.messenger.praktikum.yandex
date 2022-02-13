import Block from "../../utils/block";
import "./chat-preview.sass";

const template = `
.chat-preview
  i.icon-planet
  p Выберете чат
  i.icon-star
`;

type ChatPreviewProperties = {};

export default class ChatPreview extends Block<ChatPreviewProperties> {
  constructor(properties: ChatPreviewProperties) {
    super(template, properties);
  }
}

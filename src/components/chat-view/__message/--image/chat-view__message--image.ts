import Block from "../../../../utils/block";
import "./chat-view__message--image.sass";

const template = `
img(src=url).chat-view__message--image
`;

type ChatViewMessageImageProperties = {
  url: string;
};

export default class ChatViewMessageImage extends Block<ChatViewMessageImageProperties> {
  constructor(properties: ChatViewMessageImageProperties) {
    super(template, properties);
  }
}

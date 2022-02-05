import Block from "../../../../utils/block";
import "./chat-view__message--image.sass";

const template = `
img(src=url).chat-view__message--image
`;

type ChatViewMessageImageProperties = {
  url: string;
  [key: string]: any;
};

export default class ChatViewMessageImage extends Block {
  constructor(properties: ChatViewMessageImageProperties) {
    super(template, properties);
  }
}

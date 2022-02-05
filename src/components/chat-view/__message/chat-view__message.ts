import Block from "../../../utils/block";
import "./chat-view__message.sass";
import "./--right/chat-view__message--right.sass";
import "./--left/chat-view__message--left.sass";
import ChatViewMessageImage from "./--image/chat-view__message--image";
import ChatViewMessageText from "./--text/chat-view__message--text";

const template = `
- function validateUrl(value) { return /^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)(?:\\.(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)*(?:\\.(?:[a-z\u00A1-\uFFFF]{2,})))(?::\\d{2,5})?(?:[/?#]\\S*)?$/i.test(value); }
if sender === 0
    .chat-view__message.chat-view__message--left
        if validateUrl(content)
            != chatViewMessageImage.element
        else
            != chatViewMessageText.element
        .message-time
            span.message-time-text= time
else
    .chat-view__message.chat-view__message--right
        if validateUrl(content)
            != chatViewMessageImage.element
        else
            != chatViewMessageText.element
        .message-time
            span.message-time-text= time
`;

type ChatViewMessageProperties = {
  content: string;
  time: string;
  sender: number;
  [key: string]: any;
};

export default class ChatViewMessage extends Block {
  constructor(properties: ChatViewMessageProperties) {
    properties.chatViewMessageImage = new ChatViewMessageImage({
      url: properties.content,
    });
    properties.chatViewMessageText = new ChatViewMessageText({
      text: properties.content,
    });
    super(template, properties);
  }
}

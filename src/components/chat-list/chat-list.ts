import Block from "../../utils/block";
import "./chat-list.sass";
import ChatListHeader from "./__header/chat-list__header";
import Delimiter from "../delimiter/delimiter";
import ChatItem from "../chat-item/chat-item";

const template = `
.chat-list
  != chatListHeader.element
  != delimiter.element
  each chatListItem in chatListItems
    != chatListItem.element
    != delimiter.element
`;

type ChatListItem = {
  url: string;
  name: string;
  sender: string;
  message: string;
  time: string;
  notification: string;
};

type ChatListProperties = {
  items: ChatListItem[];
  chatListHeader?: ChatListHeader;
  delimiter?: Delimiter;
  chatListItems?: ChatItem[];
};

export default class ChatList extends Block<ChatListProperties> {
  constructor(properties: ChatListProperties) {
    properties.chatListHeader = new ChatListHeader();
    properties.delimiter = new Delimiter();
    properties.chatListItems = [];
    for (let item of properties.items) {
      properties.chatListItems.push(new ChatItem(item));
    }
    super(template, properties);
  }
}

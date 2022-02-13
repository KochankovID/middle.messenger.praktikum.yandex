import Block from "../../../utils/block";
import "./chat-list__header.sass";
import Link from "../../link/link";

const template = `
.header-container
        .header-title
            h3 Chat app
            div
                != link.element
        .header-search-bar
            i.icon-mdi-magnify
            span Поиск
`;

type ChatListHeaderProperties = {
  link?: Link;
};

export default class ChatListHeader extends Block<ChatListHeaderProperties> {
  constructor(properties?: ChatListHeaderProperties) {
    if (!properties) {
      properties = {};
    }
    properties.link = new Link({
      url: "/profile/profile.html",
      innerBlock: `p Профиль
                    i.icon-chevron-right`,
    });
    super(template, properties);
  }
}

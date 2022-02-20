import { styles } from "./styles";
import { chatListHeader } from "./chat-header/chat-list-header";
import { delimiter } from "../delimiter/delimiter";
import jss from "jss";
import { IBlock } from "../../utils/block/iblock";
import { container } from "../container/container";
import { ChatItem } from "../chat-item/chat-item";

export function chatList(
  chatItems: ChatItem[],
  elementClasses: string[] = []
): IBlock {
  const { classes } = jss.createStyleSheet(styles).attach();
  const items = [];
  for (let chatItem of chatItems) {
    items.push(chatItem, delimiter());
  }
  items.pop();

  return container(
    [classes.chatList, ...elementClasses],
    [chatListHeader(), delimiter(), ...items]
  );
}

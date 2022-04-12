import { InlineProperties } from "../../utils/block/inline-tag-block";
import { ComplexBlock } from "../../utils/block/complex-block";
import jss, { Classes } from "jss";
import { styles } from "./styles";
import { IBlock } from "../../utils/block/iblock";
import { container } from "../container/container";
import { chatViewHeader } from "./chat-view-header/chat-view-header";
import { delimiter } from "../delimiter/delimiter";
import { ChatViewMessage } from "./chat-view-message/chat-view-message";
import { chatViewFooter } from "./chat-view-footer/chat-view-footer";

type ChatItemProperties = InlineProperties & {
  url: string;
  name: string;
  messages: ChatViewMessage[];
};

export class ChatView extends ComplexBlock<ChatItemProperties> {
  setUpStyles(): Classes {
    return jss.createStyleSheet(styles).attach().classes;
  }

  build(): IBlock {
    return container(this.classes.chatView, [
      chatViewHeader(this.props.url, this.props.name),
      delimiter(),
      container(this.classes.scrollContainer, [
        container(this.classes.messagesColumn, this.props.messages),
      ]),
      delimiter(),
      chatViewFooter(),
    ]);
  }
}

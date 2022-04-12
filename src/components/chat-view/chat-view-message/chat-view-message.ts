import { ComplexBlock } from "../../../utils/block/complex-block";
import { InlineProperties } from "../../../utils/block/inline-tag-block";
import jss, { Classes } from "jss";
import { styles } from "./styles";
import { IBlock } from "../../../utils/block/iblock";
import { container } from "../../container/container";
import { TextMessage } from "./text-message/text-message";
import { ImageMessage } from "./image-message/image-message";
import { ContainerTagBlock } from "../../../utils/block/container-tag-block";

export enum ContentTypes {
  Text,
  Image,
}

type MessageProperties = InlineProperties & {
  content: string;
  contentType: ContentTypes;
  time: string;
  sender: boolean;
};

export class ChatViewMessage extends ComplexBlock<MessageProperties> {
  setUpStyles(): Classes {
    return jss.createStyleSheet(styles).attach().classes;
  }

  build(): IBlock<InlineProperties> {
    let messageBlock;
    switch (this.props.contentType) {
      case ContentTypes.Text: {
        messageBlock = new TextMessage({
          text: this.props.content,
        });
        break;
      }
      case ContentTypes.Image: {
        messageBlock = new ImageMessage({
          url: this.props.content,
        });
        break;
      }
    }

    return container(
      [
        this.classes.chatViewMessage,
        this.props.sender
          ? this.classes.chatViewMessageRight
          : this.classes.chatViewMessageLeft,
      ],
      [
        messageBlock,
        container(this.classes.messageTime, [
          new ContainerTagBlock({
            tagName: "span",
            attributes: {
              class: [this.classes.messageTimeText],
            },
            children: [this.props.time],
          }),
        ]),
      ]
    );
  }
}

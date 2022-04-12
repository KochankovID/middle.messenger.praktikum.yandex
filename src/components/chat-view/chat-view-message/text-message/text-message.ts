import { ComplexBlock } from "../../../../utils/block/complex-block";
import { InlineProperties } from "../../../../utils/block/inline-tag-block";
import jss, { Classes } from "jss";
import { IBlock } from "../../../../utils/block/iblock";
import { styles } from "./styles";
import { ContainerTagBlock } from "../../../../utils/block/container-tag-block";

type TextMessageProperties = InlineProperties & {
  text: string;
};

export class TextMessage extends ComplexBlock<TextMessageProperties> {
  setUpStyles(): Classes {
    return jss.createStyleSheet(styles).attach().classes;
  }

  build(): IBlock<InlineProperties> {
    return new ContainerTagBlock({
      tagName: "span",
      attributes: {
        class: [this.classes.chatViewMessageText],
      },
      children: [this.props.text],
    });
  }
}

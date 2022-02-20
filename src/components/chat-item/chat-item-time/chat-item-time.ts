import { InlineProperties } from "../../../utils/block/inline-tag-block";
import jss, { Classes } from "jss";
import { styles } from "./styles";
import { ComplexBlock } from "../../../utils/block/complex-block";
import { IBlock } from "../../../utils/block/iblock";
import { container } from "../../container/container";
import { ContainerTagBlock } from "../../../utils/block/container-tag-block";

type ChatItemTimeProperties = InlineProperties & {
  time: string;
};

export class ChatItemTime extends ComplexBlock<ChatItemTimeProperties> {
  setUpStyles(): Classes {
    return jss.createStyleSheet(styles).attach().classes;
  }

  build(): IBlock {
    return container(this.classes.chatItemTime, [
      new ContainerTagBlock({
        tagName: "span",
        children: [String(this.props.time)],
      }),
    ]);
  }
}

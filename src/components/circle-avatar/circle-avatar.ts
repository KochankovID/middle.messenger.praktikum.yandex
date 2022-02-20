import { ComplexBlock } from "../../utils/block/complex-block";
import {
  InlineProperties,
  InlineTagBlock,
} from "../../utils/block/inline-tag-block";
import jss, { Classes } from "jss";
import { styles } from "./styles";
import { IBlock } from "../../utils/block/iblock";

type CircleAvatarProperties = InlineProperties & {
  url: string;
};

export class CircleAvatar extends ComplexBlock<CircleAvatarProperties> {
  setUpStyles(): Classes {
    return jss.createStyleSheet(styles).attach().classes;
  }

  build(): IBlock<InlineProperties> {
    return new InlineTagBlock({
      tagName: "img",
      attributes: {
        src: this.props.url,
        class: [this.classes.circleAvatar],
      },
    });
  }
}

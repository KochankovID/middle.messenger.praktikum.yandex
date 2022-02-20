import { Input } from "../../input/input";
import { delimiter } from "../../delimiter/delimiter";
import jss, { Classes } from "jss";
import { styles } from "./styles";
import { InlineProperties } from "../../../utils/block/inline-tag-block";
import { container } from "../../container/container";
import { ContainerTagBlock } from "../../../utils/block/container-tag-block";
import { IBlock } from "../../../utils/block/iblock";
import { ComplexBlock } from "../../../utils/block/complex-block";

export class InputWithHint extends Input {
  constructor(
    properties: InlineProperties,
    validator: (value: string) => boolean
  ) {
    super({
      ...properties,
    });

    const { classes } = jss.createStyleSheet(styles).attach();
    this.props.attributes.class.push(classes.input);

    this.props.callbacks.blur = (event: Event) => {
      const showError = !validator((event.target! as HTMLInputElement).value);
      this.props.attributes.class = showError
        ? this.props.attributes.class.map((item) =>
            item === classes.input ? classes.inputError : item
          )
        : this.props.attributes.class.map((item) =>
            item === classes.inputError ? classes.input : item
          );
      return true;
    };
  }
}

type FormInputProperties = InlineProperties & {
  id: string;
  type: string;
  name: string;
  label: string;
  validator: (value: string) => boolean;
};

export class FormInput extends ComplexBlock<FormInputProperties> {
  setUpStyles(): Classes {
    return jss.createStyleSheet(styles).attach().classes;
  }

  build(): IBlock {
    return container(this.props.attributes?.class ?? [], [
      new ContainerTagBlock({
        tagName: "label",
        attributes: {
          class: [this.classes.label],
          for: this.props.id,
        },
        children: [this.props.label],
      }),
      new InputWithHint(
        {
          attributes: {
            id: this.props.id,
            type: this.props.type,
            name: this.props.name,
          },
        },
        this.props.validator
      ),
      delimiter({ attributes: { class: [this.classes.delimiter] } }),
    ]);
  }
}

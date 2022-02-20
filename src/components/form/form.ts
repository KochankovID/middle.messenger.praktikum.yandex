import jss from "jss";
import { styles } from "./styles";
import { H1 } from "../headers/headers";
import {
  ContainerProperties,
  ContainerTagBlock,
} from "../../utils/block/container-tag-block";
import { container } from "../container/container";

type FormProperties = ContainerProperties & {
  title: string;
};

export function form(properties: FormProperties) {
  const { classes } = jss.createStyleSheet(styles).attach();

  const block = new ContainerTagBlock({
    attributes: {
      ...properties.attributes,
    },
    children: [
      container(classes.formTitleContainer, [
        new H1({
          attributes: {
            class: [classes.formTitle],
          },
          children: [properties.title],
        }),
      ]),
      new ContainerTagBlock({
        tagName: "form",
        children: [container(classes.formContent, properties.children ?? [])],
      }),
    ],
  });

  block.props.attributes.class.push(classes.form);
  return block;
}

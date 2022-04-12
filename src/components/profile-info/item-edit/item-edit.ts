import {
  ContainerProperties,
  ContainerTagBlock,
} from "../../../utils/block/container-tag-block";
import jss from "jss";
import { styles } from "./styles";
import { container } from "../../container/container";
import { delimiter } from "../../delimiter/delimiter";

type ProfileItemProperties = ContainerProperties & {
  label: string;
  name: string;
  placeholder: string;
};

export function profileInfoItemEdit(properties: ProfileItemProperties) {
  const { classes } = jss.createStyleSheet(styles).attach();

  return container(classes.profileInfoItemEdit, [
    container(classes.profileInfoTitle, [
      new ContainerTagBlock({
        attributes: {
          class: [classes.profileInfoLabel],
        },
        tagName: "span",
        children: [properties.label],
      }),
      new ContainerTagBlock({
        attributes: {
          type: "text",
          name: properties.name,
          placeholder: properties.placeholder,
          class: [classes.input],
        },
        tagName: "input",
      }),
    ]),
    delimiter(),
  ]);
}

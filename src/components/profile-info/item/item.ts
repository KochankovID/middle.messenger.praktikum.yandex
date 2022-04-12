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
  value: string;
};

export function profileInfoItem(properties: ProfileItemProperties) {
  const { classes } = jss.createStyleSheet(styles).attach();

  return container(classes.profileInfoItem, [
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
          class: [classes.profileInfoValue],
        },
        tagName: "span",
        children: [properties.value],
      }),
    ]),
    delimiter(),
  ]);
}

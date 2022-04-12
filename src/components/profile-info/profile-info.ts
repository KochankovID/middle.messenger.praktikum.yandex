import jss from "jss";
import { styles } from "./styles";
import {
  ContainerProperties,
  ContainerTagBlock,
} from "../../utils/block/container-tag-block";
import { header } from "./header/header";

type ProfileInfoProperties = ContainerProperties & {
  name: string;
  url: string;
};

export function profileInfo(properties: ProfileInfoProperties) {
  const { classes } = jss.createStyleSheet(styles).attach();
  properties.children ??= [];
  const block = new ContainerTagBlock({
    attributes: {
      ...properties.attributes,
    },
    children: [header(properties), ...properties.children],
  });

  block.props.attributes.class.push(classes.profileInfoContainer);
  return block;
}

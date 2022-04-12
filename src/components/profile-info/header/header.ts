import jss from "jss";
import { styles } from "./styles";
import { Link } from "../../link/link";
import { InlineTagBlock } from "../../../utils/block/inline-tag-block";
import { themeClasses } from "../../../app";
import { container } from "../../container/container";
import { CircleAvatar } from "../../circle-avatar/circle-avatar";
import { H4 } from "../../headers/headers";
import {
  ContainerProperties,
  ContainerTagBlock,
} from "../../../utils/block/container-tag-block";

type ProfileInfoProperties = ContainerProperties & {
  name: string;
  url: string;
};

export function header(properties: ProfileInfoProperties) {
  const { classes } = jss.createStyleSheet(styles).attach();

  const block = new ContainerTagBlock({
    attributes: {
      ...properties,
    },
    children: [
      new Link({
        attributes: {
          href: "/chat",
        },
        children: [
          new InlineTagBlock({
            tagName: "i",
            attributes: {
              class: [themeClasses.iconArrowBackIos],
            },
          }),
        ],
      }),
      container(classes.headerAvatarWithName, [
        new CircleAvatar({
          attributes: {
            class: [classes.circleAvatar],
          },
          url: properties.url,
        }),
        new H4({
          children: [properties.name],
        }),
      ]),
    ],
  });

  block.props.attributes.class.push(classes.profileInfoHeader);
  return block;
}

import jss from "jss";
import { styles } from "./styles";
import { H3 } from "../../headers/headers";
import { Link } from "../../link/link";
import { themeClasses } from "../../../app";
import { container } from "../../container/container";
import { ContainerTagBlock } from "../../../utils/block/container-tag-block";
import { InlineTagBlock } from "../../../utils/block/inline-tag-block";
import { IBlock } from "../../../utils/block/iblock";

export function chatListHeader(elementClasses: string[] = []): IBlock {
  const { classes } = jss.createStyleSheet(styles).attach();

  return container(
    [classes.headerContainer, ...elementClasses],
    [
      container(classes.headerTitleContainer, [
        new H3({
          attributes: {
            class: [classes.headerTitle],
          },
          children: ["Chat app"],
        }),
        new Link({
          attributes: {
            href: "/profile",
          },
          children: [
            new ContainerTagBlock({
              tagName: "span",
              attributes: {
                class: [classes.linkText],
              },
              children: ["Профиль"],
            }),
            new InlineTagBlock({
              tagName: "i",
              attributes: {
                class: [themeClasses.iconChevronRight, classes.icon],
              },
            }),
          ],
        }),
      ]),
      container(classes.headerSearchBar, [
        new InlineTagBlock({
          tagName: "i",
          attributes: {
            class: [themeClasses.iconMdiMagnify],
          },
        }),
        new ContainerTagBlock({
          tagName: "span",
          attributes: {
            class: [classes.linkText],
          },
          children: ["Поиск"],
        }),
      ]),
    ]
  );
}

import { Button } from "../../components/button/button";
import jss from "jss";
import { styles } from "./styles";
import { preview } from "../../components/preview/preview";
import { router } from "../../app";
import { container } from "../../components/container/container";
import { H1 } from "../../components/headers/headers";
import { IBlock } from "../../utils/block/iblock";

export function home(): IBlock {
  const { classes } = jss.createStyleSheet(styles).attach();

  return container(classes.homeContainer, [
    container(classes.homeColumn, [
      new H1({
        children: ["Chat app"],
      }),
      new Button({
        attributes: {
          class: [classes.button],
        },
        callbacks: {
          click: () => {
            router.go("/login");
            return true;
          },
        },
        children: ["Start messaging"],
      }),
    ]),
    preview(),
  ]);
}

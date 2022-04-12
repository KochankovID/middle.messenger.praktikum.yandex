import { IBlock } from "../../utils/block/iblock";
import jss from "jss";
import { styles } from "./styles";
import { container } from "../../components/container/container";
import { profileInfo } from "../../components/profile-info/profile-info";
import { profileInfoItem } from "../../components/profile-info/item/item";
import { Link } from "../../components/link/link";

export function profile(): IBlock {
  const { classes } = jss.createStyleSheet(styles).attach();

  return container(classes.profileContainer, [
    profileInfo({
      attributes: {
        class: [classes.profileInfoContainer],
      },
      name: "Андрей",
      url: "https://short.link/z43sxm",
      children: [
        profileInfoItem({
          label: "Почта",
          value: "fakafafakafa@mail.ru",
        }),
        profileInfoItem({
          label: "Логин",
          value: "fakafafakafa",
        }),
        profileInfoItem({
          label: "Имя",
          value: "Андрей",
        }),
        profileInfoItem({
          label: "Фамилия",
          value: "Шувалов",
        }),
        profileInfoItem({
          label: "Имя в чате",
          value: "Андрей",
        }),
        profileInfoItem({
          label: "Телефон",
          value: "+7 900 555 55 55",
        }),
        container(classes.profileInfoButtons, [
          new Link({
            attributes: {
              class: [classes.linkText],
              href: "/profile-edit",
            },
            children: ["Изменить данные"],
          }),
          container(classes.footerButtons, [
            new Link({
              attributes: {
                class: [classes.linkText],
                href: "/profile-edit",
              },
              children: ["Изменить пароль"],
            }),
            new Link({
              attributes: {
                class: [classes.linkText],
                href: "/",
              },
              children: ["Выйти"],
            }),
          ]),
        ]),
      ],
    }),
  ]);
}

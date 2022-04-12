import { IBlock } from "../../utils/block/iblock";
import jss from "jss";
import { styles } from "./styles";
import { container } from "../../components/container/container";
import { profileInfo } from "../../components/profile-info/profile-info";
import { profileInfoItemEdit } from "../../components/profile-info/item-edit/item-edit";
import { Button } from "../../components/button/button";
import { router } from "../../app";

export function profileEdit(): IBlock {
  const { classes } = jss.createStyleSheet(styles).attach();

  return container(classes.profileContainer, [
    profileInfo({
      attributes: {
        class: [classes.profileInfoContainer],
      },
      name: "Андрей",
      url: "https://short.link/z43sxm",
      children: [
        profileInfoItemEdit({
          label: "Почта",
          name: "email",
          placeholder: "fakafafakafa@mail.ru",
        }),
        profileInfoItemEdit({
          label: "Логин",
          name: "login",
          placeholder: "fakafafakafa",
        }),
        profileInfoItemEdit({
          label: "Имя",
          name: "first_name",
          placeholder: "Андрей",
        }),
        profileInfoItemEdit({
          label: "Фамилия",
          name: "second_name",
          placeholder: "Шувалов",
        }),
        profileInfoItemEdit({
          label: "Имя в чате",
          name: "display_name",
          placeholder: "Андрей",
        }),
        profileInfoItemEdit({
          label: "Телефон",
          name: "phone",
          placeholder: "+7 900 555 55 55",
        }),
        new Button({
          attributes: {
            class: [classes.footerButtons],
          },
          children: ["Сохранить"],
          callbacks: {
            click: () => {
              router.go("/profile");
              return true;
            },
          },
        }),
      ],
    }),
  ]);
}

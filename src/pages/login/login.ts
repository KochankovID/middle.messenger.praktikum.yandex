import jss from "jss";
import { styles } from "./styles";
import { form } from "../../components/form/form";
import { styles as formStyles } from "../../components/form/styles";
import { container } from "../../components/container/container";
import { H3 } from "../../components/headers/headers";
import { Button } from "../../components/button/button";
import { router } from "../../app";
import { Link } from "../../components/link/link";
import { FormInput } from "../../components/form/form-input/form-input";
import { validateLogin, validatePassword } from "../../utils/validators";
import { IBlock } from "../../utils/block/iblock";

export function login(): IBlock {
  const { classes } = jss.createStyleSheet(styles).attach();
  const { classes: formClasses } = jss.createStyleSheet(formStyles).attach();

  return container(classes.loginContainer, [
    form({
      title: "Chat app",
      attributes: {
        class: [classes.form],
      },
      children: [
        new H3({
          attributes: {
            class: [formClasses.formSubTitle],
          },
          children: ["Вход"],
        }),
        new FormInput({
          id: "login",
          type: "text",
          name: "login",
          label: "Логин",
          validator: validateLogin,
        }),
        new FormInput({
          id: "password",
          type: "password",
          name: "password",
          label: "Пароль",
          validator: validatePassword,
        }),
        new Button({
          attributes: {
            class: [classes.button],
          },
          children: ["Авторизоваться"],
          callbacks: {
            click: () => {
              router.go("/chat");
              return true;
            },
          },
        }),
        new Link({
          attributes: {
            href: "/registration",
            class: [classes.link],
          },
          children: ["Нет аккаунта?"],
        }),
      ],
    }),
  ]);
}

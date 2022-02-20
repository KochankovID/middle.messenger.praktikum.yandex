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
import {
  validateEmail,
  validateLogin,
  validateName,
  validatePassword,
  validatePhone,
} from "../../utils/validators";
import { IBlock } from "../../utils/block/iblock";

export function registration(): IBlock {
  const { classes } = jss.createStyleSheet(styles).attach();
  const { classes: formClasses } = jss.createStyleSheet(formStyles).attach();

  return container(classes.registrationContainer, [
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
          children: ["Регистрация"],
        }),
        new FormInput({
          id: "email",
          type: "email",
          name: "email",
          label: "Почта",
          validator: validateEmail,
        }),
        new FormInput({
          id: "login",
          type: "text",
          name: "login",
          label: "Логин",
          validator: validateLogin,
        }),
        new FormInput({
          id: "first_name",
          type: "text",
          name: "first_name",
          label: "Имя",
          validator: validateName,
        }),
        new FormInput({
          id: "second_name",
          type: "text",
          name: "second_name",
          label: "Фамилия",
          validator: validateName,
        }),
        new FormInput({
          id: "phone",
          type: "tel",
          name: "phone",
          label: "Телефон",
          validator: validatePhone,
        }),
        new FormInput({
          id: "password",
          type: "password",
          name: "password",
          label: "Пароль",
          validator: validatePassword,
        }),
        new FormInput({
          id: "password1",
          type: "password",
          name: "password1",
          label: "Пароль (ещё раз)",
          validator: validatePassword,
        }),
        new Button({
          attributes: {
            class: [classes.button],
          },
          children: ["Зарегистрироваться"],
          callbacks: {
            click: () => {
              router.go("/");
              return true;
            },
          },
        }),
        new Link({
          attributes: {
            href: "/login",
            class: [classes.link],
          },
          children: ["Вход"],
        }),
      ],
    }),
  ]);
}

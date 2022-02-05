import {
  setValidator,
  validateLogin,
  validatePassword,
} from "../../utils/validators";

let loginInput: HTMLInputElement | null =
  document.querySelector("form input#login");
setValidator(loginInput!, validateLogin);

let passwordInput: HTMLInputElement | null = document.querySelector(
  "form input#password"
);
setValidator(passwordInput!, validatePassword);

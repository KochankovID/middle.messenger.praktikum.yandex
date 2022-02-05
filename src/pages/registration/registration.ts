import {
  setValidator,
  validateEmail,
  validateLogin,
  validateName,
  validatePassword,
  validatePhone,
} from "../../utils/validators";

let emailInput: HTMLInputElement | null =
  document.querySelector("form input#email");
setValidator(emailInput!, validateEmail);

let firstNameInput: HTMLInputElement | null = document.querySelector(
  "form input#first_name"
);
setValidator(firstNameInput!, validateName);

let secondNameInput: HTMLInputElement | null = document.querySelector(
  "form input#second_name"
);
setValidator(secondNameInput!, validateName);

let phoneInput: HTMLInputElement | null =
  document.querySelector("form input#phone");
setValidator(phoneInput!, validatePhone);

let loginInput: HTMLInputElement | null =
  document.querySelector("form input#login");
setValidator(loginInput!, validateLogin);

let passwordInput: HTMLInputElement | null = document.querySelector(
  "form input#password"
);
setValidator(passwordInput!, validatePassword);

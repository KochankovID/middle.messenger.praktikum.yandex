import { render } from "./utils/render";
import jss from "jss";
import preset from "jss-preset-default";
import { home } from "./pages/home/home";
import { Router } from "./utils/router";
import { login } from "./pages/login/login";
import { themeStyles } from "./theme";
import { registration } from "./pages/registration/registration";
import { chat } from "./pages/chat/chat";

jss.setup(preset());

const { classes } = jss.createStyleSheet(themeStyles).attach();
export const themeClasses = classes;

export const router = new Router(window.location.pathname);
router.use("/", home());
router.use("/login", login());
router.use("/registration", registration());
router.use("/chat", chat());

setInterval(() => {
  render(document.querySelector(".root")!, router.getCurrentRoute().block);
}, 16);

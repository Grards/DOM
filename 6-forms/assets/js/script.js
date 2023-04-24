import { firstname, displayFirstname } from "./modules/display-firstname.js";
import { age, theTruth } from "./modules/the-truth.js";
import { pwd, pwdConfirm, password, passwordVerify } from "./modules/password.js";
import { toggleDarkmode, changeMode } from "./modules/change-mode.js";

firstname.addEventListener("keyup", displayFirstname);
age.addEventListener("keyup", theTruth);
pwd.addEventListener("keyup", password);
pwdConfirm.addEventListener("keyup", passwordVerify);
toggleDarkmode.addEventListener("change", changeMode);
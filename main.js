import { createElement } from "lwc";
import App from "src/app";

const elm = createElement("c-app", { is: App });
document.body.appendChild(elm);
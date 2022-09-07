// import { createElement } from "lwc";
// import App from "src/app";

// const elm = createElement("c-app", { is: App });
// document.body.appendChild(elm);

import App from "x/app";

customElements.define('x-app', App.CustomElementConstructor);

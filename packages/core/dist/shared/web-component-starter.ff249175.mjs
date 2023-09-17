import { LitElement, html, css } from 'lit';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class WebComponentStarter extends LitElement {
  constructor() {
    super();
    this.name = "World";
  }
  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
__publicField(WebComponentStarter, "properties", {
  name: {}
});
// Define scoped styles right with your component, in plain CSS
__publicField(WebComponentStarter, "styles", css`
    :host {
      color: blue;
    }
  `);

const components = {
  __proto__: null,
  WebComponentStarter: WebComponentStarter
};

export { WebComponentStarter as W, components as c };

import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cec-button")
export class CecButton extends LitElement {
  protected render() {
    return html` <button>Teste</button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cec-button": CecButton;
  }
}

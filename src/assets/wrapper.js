// import * as MyComponent from './my-element'
export default class extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');

        template.innerHTML = `<my-webcomponent></my-webcomponent>`;

        this._shadowRoot = this.attachShadow({
            mode: 'open',
            delegatesFocus: false
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
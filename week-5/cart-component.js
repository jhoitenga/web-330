export class CartComponent extends HTMLElement {
    constructor() {
        super();
    }
}

connectedCallback() {
    this.innerHTML = '<i id="cart" class="fas fa-shopping-cart"></i> (span id="cart-count"></span>)';
}

customElements.define("cart-component", CartComponent);
// Class that extends JavaScripts HTMLElement object
export class CartComponent extends HTMLElement {
    constructor() {
        // Call super() function for the HTMLElement parent object
        super();
    }

connectedCallback() {
    // Set the innerHTML to a string for the font-awesome shopping-cart icon
    this.innerHTML = '<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)';
}
}

// Call the customElements.define() function pass-in the string value cart-component and the CartComponent class
customElements.define("cart-component", CartComponent);
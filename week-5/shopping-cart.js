export class ShoppingCart {
    constructor() {
        this.products = [];
    }
}

function count() {
    return this.product.length;
}

function add(product) {
    this.products.push(product);
}

let shoppingCart = new ShoppingCart();

for (let i = 0; i < 10; i++) {
    shoppingCart.products.push("Product " + i);
}

console.log(shoppingCart.products);
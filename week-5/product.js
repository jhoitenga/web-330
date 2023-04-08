// Create a class named Product with a constructor and two parameters: name and price
export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        // Add a new property for id and generate a new random value
        this.id = Math.random().toString(16).slice(2);
    }
}

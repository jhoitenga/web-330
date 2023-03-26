// Adding an import statement for the Product object
import { Product } from "./product.js";

// Creating a class named Dessert and inherit the Product object
export class Dessert extends Product {
    constructor (name, price) {
        // Pass the name and price params to the parent class
        super (name, price);
    }

}
export class ShoppingCart {
    constructor(){
        // Create a property for products and assign it an empty array
        this.products = [];
    }

count(){
    // Return the length of the products array
    return this.products.length;
}

// Single parameter for a product object
addProduct(product){
    // In the body of the function, add the product object to the products array
    this.products.push(product);
}

// Create an iterator, use a for…of statement to loop over the products array. Yield return each iterated product object.
*[Symbol.iterator]()
{   
    for(let product of this.products)
    {
        yield product;
    }
}
}
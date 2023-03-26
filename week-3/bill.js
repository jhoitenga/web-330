// Creating a class named Bill with four properties with empty arrays
export class Bill {
    constructor (_beverages, _appetizers, _mainCourses, _desserts) {

    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
}

// Function to push beverage to beverage array
addBeverage(beverage) {
    this._beverages.push(beverage);
}

// Function to push appetizer to appetizer array
addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
}

// Function to push mainCourse to mainCourses array
mainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
}

addDessert(dessert) {
    this._desserts.push(dessert);
}

function getTotal() {
    let total = 0;
    
    let beverageTotal = this._beverages.forEach(function(beverage) {
        total += parseFloat(beverage.price);
        console.log("Beverage price: " + beverage.price);
    });

    let appetizerTotal = this._appetizers.forEach(function(appetizer) {
        total += parseFloat(appetizer.price);
        console.log("Appetizer price: " + appetizer.price);
    });

    let mainCourseTotal = this._mainCourse.forEach(function(mainCourse) {
        total += parseFloat(mainCourse.price);
        console.log("Main Course price: " + mainCourse.price);
    });

    let dessertTotal = this._desserts.forEach(function(dessert) {
        total += parseFloat(dessert.price);
        console.log("Dessert price: " + dessert.price);
    });

    console.log("Total:" + total);
    
    // Adjusting the total variable to two decimal points
    return total.toFixed(2);
    console.log("Total:" + total);

}
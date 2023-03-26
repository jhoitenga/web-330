import { Appetizer } from "./appetizer";

// Creating a class named Bill with four properties with empty arrays
export class Bill {
    constructor (_beverages, _appetizers _mainCourses, _desserts)

    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
}

// Function to push beverage to beverage array
function addBeverage(beverage) {
    this._beverages.push(beverage);
}

// Function to push appetizer to appetizer array
function addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
}

// Function to push mainCourse to mainCourses array
function mainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
}

function addDessert(dessert) {
    this._desserts.push(dessert);
}

function getTotal() {
    let total = 0;
    
    let beverageTotal = this._beverages.array.forEach(function(beverage) {
        total += parseFloat(beverage.price);
    })

    let appetizerTotal = this._appetizers.array.forEach(function(appetizer) {
        total += parseFloat(appetizer.price);
    })

    let mainCourseTotal = this._mainCourse.array.forEach(function(mainCourse) {
        total += parseFloat(mainCourse.price);
    })

    let dessertTotal = this._desserts.array.forEach(function(dessert) {
        total += parseFloat(dessert.price);
    })


}
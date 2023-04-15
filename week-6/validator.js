// Adding import statements for RequiredField, FloatField, FloatMinField, FloatMaxField
import { RequiredField } from "./required-field.js"
import { FloatField } from "./float-field.js"
import { FloatMinField } from "./float-field-min.js"
import { FloatMaxField } from "./float-field-max.js"

export class Validator 
{
    // Creating two class properties: validators and messages with an empty array
    validators = [];
    messages = [];
    
    // Creating a class constructor with two parameters: name and field
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    // Creating a function named addRequiredField() 
    addRequiredField() {
        // Pushing a new instance of the RequiredField class to the validators array using the name and field as parameters
        this.validators.push(new RequiredField(this.name, this.field));
    }
    
    // Creating a function named addRequiredFloatField() 
    addRequiredFloatField() {
        // Pushing a new instance of the FloatField class to the validators array using the name and field as parameters
        this.validators.push(new FloatField(this.name, this.field));
    }
    
    // Creating a function named addFloatMinField() with a single parameter for min
    addFloatMinField(min) {
        // Pushing a new instance of the FloatMinField class to the validators array using the name, field, and min as parameters
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    
    // Creating a function named addFloatMaxField() with a single parameter for max
    addFloatMaxField(max) {
        // Pushing a new instance of the FloatMaxField class to the validators array using the name, field, and max as parameters
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    
    // Creating a function named validate()
    validate() {
        // Using a for…of statement, iterate over the validators array and call the iterated objects validate function
        for (let validator of this.validators) {
            // If false, push the iterated objects getMessage() function to the class properties message array and return the value false
            if (!validator.validate()) {
                this.messages.push(validator.getMessage());
            }
        }
        
        return this.messages.length == 0;
    }
}
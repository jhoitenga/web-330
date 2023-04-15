// Creating a class named FloatField
export class FloatField {
    // Creating a constructor and supply it with two parameters: name and field.
    constructor(name, field){
        // Setting the parameters to class properties
        this.name = name;
        this.field = field;
    }
    
    // Creating a function named validate
    validate() {
        // Check for NaN values
        if (!isNaN(this.field)) {
            return true;
        }
        else {
            return false;
        }
    }
    
    // Creating a function named getMessage() and return the string message
    getMessage() {
        return this.name + " must be a float value. You entered " +  this.field;
    }
}
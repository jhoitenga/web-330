// Creating a class named FloatMinField
export class FloatMinField {
    // Creating a constructor and supply it three parameters: name, field, and min
    constructor(name, field, min) {
        // Setting the parameters to class properties
        this.name = name;
        this.field = field;
        this.min = min;
    }
    
    // Creating a function named validate.  
    validate() {
        // ParseFloat the field value and return true if the value is greater than min
        if (parseFloat(this.field) > this.min) {
            return true;
        }
        else {
            return false;
        }
    }

    // Creating a function named getMessage() and return the string message
    getMessage() {
        return this.name + "must be more than " +  this.min + ". You entered " + this.field;
    }

}
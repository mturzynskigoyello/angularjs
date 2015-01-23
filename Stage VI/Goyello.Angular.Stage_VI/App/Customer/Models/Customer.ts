class Customer {

    constructor(firstName: string, lastName: string, dateOfBirth: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
    
    firstName: string;
    lastName: string;
    dateOfBirth: Date;    
}

export = Customer;
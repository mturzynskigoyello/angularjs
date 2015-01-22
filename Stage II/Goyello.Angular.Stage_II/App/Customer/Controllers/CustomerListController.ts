import Customer = require("Customer/Models/Customer");

class CustomerListController {
    
    customers: Customer[];

    static $inject = [];
    constructor() {
        this.customers = [
            new Customer("Christopher", "McGarity", new Date(1965, 12, 24)),
            new Customer("Joanne", "Tarbell", new Date(1948, 6, 18)),
            new Customer("Solomon", "Farrell", new Date(1987, 10, 4)),
            new Customer("Terrence", "Ramsey", new Date(1961, 7, 24))
        ];        
    }

    orderByFieldName = "firstName";
    orderByAscending = true;

    orderBy(fieldName: string) {
        if (this.orderByFieldName === fieldName) {
            this.orderByAscending = !this.orderByAscending;
        } else {
            this.orderByAscending = false;
        }
        this.orderByFieldName = fieldName;        
    }

}

export = CustomerListController;
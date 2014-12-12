import Customer = require("Customer/Models/Customer");

class CustomerListController {
    
    static get controllerName(): string {
        return "Customer.CustomerListController";
    }

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
    
    orderBy(fieldName: string) {
        
    }

}

export = CustomerListController;
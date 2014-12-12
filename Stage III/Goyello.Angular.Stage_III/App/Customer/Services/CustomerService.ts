import ICustomerService = require("Customer/Services/ICustomerService");
import Customer = require("Customer/Models/Customer");

class CustomerService implements ICustomerService {

    private customers: Customer[] = [];

    getAll(): Customer[] {
        this.customers = [
            new Customer("Christopher", "McGarity", new Date(1965, 12, 24)),
            new Customer("Joanne", "Tarbell", new Date(1948, 6, 18)),
            new Customer("Solomon", "Farrell", new Date(1987, 10, 4)),
            new Customer("Terrence", "Ramsey", new Date(1961, 7, 24))
        ];
        return this.customers;
    }
}

export = CustomerService;
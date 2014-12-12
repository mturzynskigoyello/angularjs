import ICustomerService = require("Customer/Services/ICustomerService");
import Customer = require("Customer/Models/Customer");

class CustomerService implements ICustomerService {

    private customers: Customer[] = [
        new Customer("Christopher", "McGarity", new Date(1965, 12, 24)),
        new Customer("Joanne", "Tarbell", new Date(1948, 6, 18)),
        new Customer("Solomon", "Farrell", new Date(1987, 10, 4)),
        new Customer("Terrence", "Ramsey", new Date(1961, 7, 24))
    ];

    getAll(): Customer[] {        
        return this.customers;
    }

    add(customer: Customer) {
        var newCustomer = new Customer(customer.firstName, customer.lastName, customer.dateOfBirth);
        this.customers.push(newCustomer);
    }

    remove(customer: Customer) {
        var indexOfCustomer = this.customers.indexOf(customer);
        this.customers.splice(indexOfCustomer, 1);
    }
}

export = CustomerService;
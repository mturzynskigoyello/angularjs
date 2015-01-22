import Customer = require("Customer/Models/Customer");

interface ICustomerService {
    getAll(): Customer[];    
    add(customer: Customer);
    remove(customer: Customer);
}

export = ICustomerService;
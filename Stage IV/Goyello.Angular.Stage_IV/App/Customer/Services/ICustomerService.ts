import Customer = require("Models/Customer");

interface ICustomerService {
    getAll(): Customer[];    
    add(customer: Customer);
    remove(customer: Customer);
}

export = ICustomerService;
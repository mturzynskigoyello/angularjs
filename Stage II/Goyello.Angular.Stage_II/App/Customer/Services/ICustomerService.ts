import Customer = require("Customer/Models/Customer");

interface ICustomerService {
    getAll(): Customer[];
}

export = ICustomerService;
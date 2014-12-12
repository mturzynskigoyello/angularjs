import Customer = require("Models/Customer");

interface ICustomerService {
    getAll(): Customer[];    
}

export = ICustomerService;
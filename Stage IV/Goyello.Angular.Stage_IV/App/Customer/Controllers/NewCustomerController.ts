import Config = require("Customer/Config");
import Customer = require("Customer/Models/Customer");
import ICustomerService = require("Customer/Services/ICustomerService")

class NewCustomerController {
    
    static $inject = [Config.Services.customer];
    constructor(private customerService: ICustomerService) {
        
    }

    customer: Customer = new Customer("", "", new Date());

    save() {
        this.customerService.add(this.customer);
    }
}

export = NewCustomerController;
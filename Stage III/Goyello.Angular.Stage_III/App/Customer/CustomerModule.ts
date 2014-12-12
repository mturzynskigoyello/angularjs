import Config = require("Customer/Config")
import CustomerListController = require("Customer/Controllers/CustomerListController")
import CustomerService = require("Customer/Services/CustomerService");

class CustomerModule {
    static initialize() {
        angular.module("Customer", [])
            .controller(Config.Controllers.customerList, CustomerListController)
            .service(Config.Services.customer, CustomerService);
    }
}

export = CustomerModule;
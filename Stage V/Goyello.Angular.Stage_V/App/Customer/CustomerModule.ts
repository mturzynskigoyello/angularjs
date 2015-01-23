import Config = require("Customer/Config")
import CustomerListController = require("Customer/Controllers/CustomerListController")
import NewCustomerController = require("Customer/Controllers/NewCustomerController")
import CustomerService = require("Customer/Services/CustomerService");

class CustomerModule {
    static initialize() {
        angular.module("Customer", ["ngMessages"])
            .controller(Config.Controllers.customerList, CustomerListController)
            .controller(Config.Controllers.newCustomer, NewCustomerController)
            .service(Config.Services.customer, CustomerService);
    }
}

export = CustomerModule;
import Config = require("Customer/Config")
import CustomerListController = require("Customer/Controllers/CustomerListController")

class CustomerModule {
    static initialize() {
        angular.module("Customer", [])
            .controller(Config.Controllers.customerList, CustomerListController);
    }
}

export = CustomerModule;
import CustomerListController = require("Customer/Controllers/CustomerListController")
import Config = require("Customer/Config")

class CustomerModule {
    static initialize() {
        angular.module("Customer", [])
            .controller(Config.Controllers.customerList, CustomerListController);
    }
}

export = CustomerModule;
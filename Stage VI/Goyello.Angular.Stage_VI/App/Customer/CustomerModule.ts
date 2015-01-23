import Config = require("Customer/Config")
import CustomerListController = require("Customer/Controllers/CustomerListController")
import NewCustomerController = require("Customer/Controllers/NewCustomerController")
import CustomerService = require("Customer/Services/CustomerService");

class CustomerModule {
    static initialize() {
        angular.module("Customer", ["ngMessages", "ngRoute"])
            .controller(Config.Controllers.customerList, CustomerListController)
            .controller(Config.Controllers.newCustomer, NewCustomerController)
            .service(Config.Services.customer, CustomerService)
            .config(($routeProvider: ng.route.IRouteProvider) => {
                $routeProvider.when("/customers", {
                    controller: Config.Controllers.customerList,
                    controllerAs: "ctrl",
                    templateUrl: "/App/Customer/Views/CustomerList.html"
                }).when("/customers/create", {
                    controller: Config.Controllers.newCustomer,
                    controllerAs: "ctrl",
                    templateUrl: "/App/Customer/Views/CreateCustomer.html"
                }).otherwise({
                    redirectTo: "/customers"
                });
            });

    }
}

export = CustomerModule;
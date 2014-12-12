define(["require", "exports", "Customer/Config", "Customer/Controllers/CustomerListController", "Customer/Controllers/NewCustomerController", "Customer/Services/CustomerService"], function(require, exports, Config, CustomerListController, NewCustomerController, CustomerService) {
    var CustomerModule = (function () {
        function CustomerModule() {
        }
        CustomerModule.initialize = function () {
            angular.module("Customer", []).controller(Config.Controllers.customerList, CustomerListController).controller(Config.Controllers.newCustomer, NewCustomerController).service(Config.Services.customer, CustomerService);
        };
        return CustomerModule;
    })();

    
    return CustomerModule;
});
//# sourceMappingURL=CustomerModule.js.map

define(["require", "exports", "Customer/Config", "Customer/Controllers/CustomerListController", "Customer/Services/CustomerService"], function(require, exports, Config, CustomerListController, CustomerService) {
    var CustomerModule = (function () {
        function CustomerModule() {
        }
        CustomerModule.initialize = function () {
            angular.module("Customer", []).controller(Config.Controllers.customerList, CustomerListController).service(Config.Services.customer, CustomerService);
        };
        return CustomerModule;
    })();

    
    return CustomerModule;
});
//# sourceMappingURL=CustomerModule.js.map

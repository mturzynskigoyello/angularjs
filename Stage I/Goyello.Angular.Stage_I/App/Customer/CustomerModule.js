define(["require", "exports", "Customer/Controllers/CustomerListController", "Customer/Config"], function(require, exports, CustomerListController, Config) {
    var CustomerModule = (function () {
        function CustomerModule() {
        }
        CustomerModule.initialize = function () {
            angular.module("Customer", []).controller(Config.Controllers.customerList, CustomerListController);
        };
        return CustomerModule;
    })();

    
    return CustomerModule;
});
//# sourceMappingURL=CustomerModule.js.map

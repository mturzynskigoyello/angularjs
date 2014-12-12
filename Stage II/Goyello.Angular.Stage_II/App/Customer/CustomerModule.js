define(["require", "exports", "Customer/Config", "Customer/Controllers/CustomerListController"], function(require, exports, Config, CustomerListController) {
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

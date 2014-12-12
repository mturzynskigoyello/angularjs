define(["require", "exports", "Customer/Config"], function(require, exports, Config) {
    var CustomerListController = (function () {
        function CustomerListController(customerService) {
            this.customerService = customerService;
            this.orderByFieldName = "firstName";
            this.orderByAscending = true;
            this.customers = customerService.getAll();
        }
        CustomerListController.prototype.orderBy = function (fieldName) {
            this.orderByFieldName = fieldName;
            this.orderByAscending = !this.orderByAscending;
        };
        CustomerListController.$inject = [Config.Services.customer];
        return CustomerListController;
    })();

    
    return CustomerListController;
});
//# sourceMappingURL=CustomerListController.js.map

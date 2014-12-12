define(["require", "exports", "Customer/Models/Customer"], function(require, exports, Customer) {
    var CustomerListController = (function () {
        function CustomerListController() {
            this.orderByFieldName = "firstName";
            this.orderByAscending = true;
            this.customers = [
                new Customer("Christopher", "McGarity", new Date(1965, 12, 24)),
                new Customer("Joanne", "Tarbell", new Date(1948, 6, 18)),
                new Customer("Solomon", "Farrell", new Date(1987, 10, 4)),
                new Customer("Terrence", "Ramsey", new Date(1961, 7, 24))
            ];
        }
        CustomerListController.prototype.orderBy = function (fieldName) {
            this.orderByFieldName = fieldName;
            this.orderByAscending = !this.orderByAscending;
        };
        CustomerListController.$inject = [];
        return CustomerListController;
    })();

    
    return CustomerListController;
});
//# sourceMappingURL=CustomerListController.js.map

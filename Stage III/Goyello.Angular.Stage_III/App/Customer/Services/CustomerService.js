define(["require", "exports", "Customer/Models/Customer"], function(require, exports, Customer) {
    var CustomerService = (function () {
        function CustomerService() {
            this.customers = [];
        }
        CustomerService.prototype.getAll = function () {
            this.customers = [
                new Customer("Christopher", "McGarity", new Date(1965, 12, 24)),
                new Customer("Joanne", "Tarbell", new Date(1948, 6, 18)),
                new Customer("Solomon", "Farrell", new Date(1987, 10, 4)),
                new Customer("Terrence", "Ramsey", new Date(1961, 7, 24))
            ];
            return this.customers;
        };
        return CustomerService;
    })();

    
    return CustomerService;
});
//# sourceMappingURL=CustomerService.js.map

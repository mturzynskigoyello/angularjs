define(["require", "exports", "Customer/Config", "Customer/Models/Customer"], function(require, exports, Config, Customer) {
    var NewCustomerController = (function () {
        function NewCustomerController(customerService) {
            this.customerService = customerService;
            this.customer = new Customer("", "", new Date());
        }
        NewCustomerController.prototype.save = function () {
            this.customerService.add(this.customer);
        };
        NewCustomerController.$inject = [Config.Services.customer];
        return NewCustomerController;
    })();

    
    return NewCustomerController;
});
//# sourceMappingURL=NewCustomerController.js.map

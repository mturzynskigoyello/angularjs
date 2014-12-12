define(["require", "exports"], function(require, exports) {
    var Controllers = (function () {
        function Controllers() {
        }
        Object.defineProperty(Controllers, "customerList", {
            get: function () {
                return "Customer.CustomerListController";
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Controllers, "newCustomer", {
            get: function () {
                return "Customer.NewCustomerController";
            },
            enumerable: true,
            configurable: true
        });
        return Controllers;
    })();
    exports.Controllers = Controllers;

    var Services = (function () {
        function Services() {
        }
        Object.defineProperty(Services, "customer", {
            get: function () {
                return "Customer.CustomerService";
            },
            enumerable: true,
            configurable: true
        });
        return Services;
    })();
    exports.Services = Services;
});
//# sourceMappingURL=Config.js.map

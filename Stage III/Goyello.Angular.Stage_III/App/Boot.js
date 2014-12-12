require([
    "angular", "jquery",
    "Customer/CustomerModule"], function (angular, jquery, customerModule) {
    customerModule.initialize();
    angular.bootstrap(jquery(document), ["Customer"]);
});
//# sourceMappingURL=Boot.js.map

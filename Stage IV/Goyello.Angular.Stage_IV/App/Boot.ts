require(["angular", "jquery",
    "Customer/CustomerModule"],
    (angular: ng.IAngularStatic, jquery: JQueryStatic, customerModule) => {
        customerModule.initialize();
        angular.bootstrap(jquery(document), ["Customer"]);
    });
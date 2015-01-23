require(["Customer/CustomerModule",
    "angular", "jquery", "angular_messages", "angular_route"],
    (customerModule, angular: ng.IAngularStatic, jquery: JQueryStatic) => {
        customerModule.initialize();
        angular.bootstrap(jquery(document), ["Customer"]);
    });
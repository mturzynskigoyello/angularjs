define(["require", "exports"], function(require, exports) {
    var Customer = (function () {
        function Customer(firstName, lastName, dateOfBirth) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dateOfBirth = dateOfBirth;
        }
        return Customer;
    })();

    
    return Customer;
});
//# sourceMappingURL=ICustomer.js.map

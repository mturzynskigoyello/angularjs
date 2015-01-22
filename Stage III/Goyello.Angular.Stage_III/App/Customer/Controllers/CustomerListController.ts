import Config = require("Customer/Config")
import Customer = require("Customer/Models/Customer");
import ICustomerService = require("Customer/Services/ICustomerService")

class CustomerListController {
    
    customers: Customer[];

    static $inject = [Config.Services.customer];
    constructor(private customerService: ICustomerService) {
        this.customers = customerService.getAll();
    }

    orderByFieldName = "firstName";
    orderByAscending = true;

    orderBy(fieldName: string) {
        if (this.orderByFieldName === fieldName) {
            this.orderByAscending = !this.orderByAscending;
        } else {
            this.orderByAscending = false;
        }
        this.orderByFieldName = fieldName;
    }

}

export = CustomerListController;
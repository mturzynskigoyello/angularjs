import Config = require("Customer/Config");
import Customer = require("Customer/Models/Customer");
import ICustomerService = require("Customer/Services/ICustomerService")

class NewCustomerController {
    
    static $inject = [Config.Services.customer];
    constructor(private customerService: ICustomerService) {
        
    }

    customer: Customer = new Customer("", "", null);

    save(form: ng.IFormController) {
        form.$setSubmitted();
        if (form.$valid) {
            this.customerService.add(this.customer);
            form.$setPristine();
            this.customer = new Customer("", "", null);
        }        
    }

    hasValidationErrors(form: ng.IFormController): boolean {
        return form.$submitted && form.$invalid;
    }

    hasError(form: ng.IFormController, model: ng.INgModelController): boolean {
        return (form.$submitted || model.$dirty) && model.$invalid;
    }
}

export = NewCustomerController;
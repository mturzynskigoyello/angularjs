export class Controllers {
    static get customerList(): string {
        return "Customer.CustomerListController";
    }

    static get newCustomer(): string {
        return "Customer.NewCustomerController";
    }
} 

export class Services {
    static get customer(): string {
        return "Customer.CustomerService";
    }
} 
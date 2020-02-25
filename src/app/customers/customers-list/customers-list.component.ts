import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    private _customers: ICustomer[] = [];   // The original entries

    @Input() get customers(): ICustomer[] { // Method's name, must match with the property in the template (.html)
        return this._customers;
    }

    set customers(value: ICustomer[]) {     // Method's name, must match with the property in the template (.html)
        if(value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }

    filteredCustomers: any[] = [];          // The filtered entries
    customersOrderTotal: number;
    currencyCode: string = 'USD';
    
    constructor() {}
    
    // As an standard the class implements the OnInit interface, that will be used in the life-cycle in the future.
    ngOnInit() { }
    
    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.orderTotal.toString().indexOf(data) > -1;
            });
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    }

    sort(prop: string) {

    }
}
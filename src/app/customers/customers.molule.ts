import { NgModule }     from '@angular/core';
import { FormsModule }   from '@angular/forms';  // Contains the [(ngModule)]
import { CommonModule } from '@angular/common';  // COntains directives as *ngFor, *ngIf, etc...

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';

import { AsyncObservablePipeComponent } from '../clock/clock.async.component';
import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule, CustomersRoutingModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent, AsyncObservablePipeComponent ],
  exports: [ CustomersComponent ]
})

export class CustomersModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomersModule } from './customers/customers.molule'
import { SharedModule } from  './shared/shared.module';
import { AppComponent }  from './app.component';
import { CoreModule }  from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundModule } from './404/page-not-found.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  imports:      [ BrowserModule, CoreModule, CustomersModule, PageNotFoundModule, SharedModule, OrdersModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
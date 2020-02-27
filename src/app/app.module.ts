import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomersModule } from './customers/customers.molule'
import { SharedModule } from  './shared/shared.module';
import { AppComponent }  from './app.component';
import { CoreModule }  from './core/core.module';

@NgModule({
  imports:      [ BrowserModule, CoreModule, CustomersModule, SharedModule ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
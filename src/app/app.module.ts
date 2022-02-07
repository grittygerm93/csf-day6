import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CustomerComponent } from './customer/customer.component';
import {CustomerService} from "./customer/customer.service";
import { RegistrationComponent } from './registration/registration.component';
import {RegistrationService} from "./registration/registration.service";
import {ReactiveFormsModule} from "@angular/forms";
import { OpenweatherComponent } from './openweather/openweather.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RegistrationComponent,
    OpenweatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

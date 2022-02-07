import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {Customer} from "./customer.model";
import {CustomerService} from "./customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

 /* customer: Customer;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // lastValueFrom(this.http.get<Customer>('http://localhost:8080/api/customer'))
    //   .then(res => {
    //     console.log(res);
    //     this.customer = res;
    //   })
    //   .catch(error => console.log(error));

//    using subscription and with queryparams set inline..
/!*    this.http.get<Customer>('http://localhost:8080/api/customer/a', {params: new HttpParams().set('name', 'fred')})
      .subscribe(res => {
        this.customer = res;
      }, error => console.log(error))*!/

    this.withQueryParams();
    this.withoutQueryParams();
  }


  private withoutQueryParams() {
    this.http.get<Customer>('http://localhost:8080/api/customer')
      .subscribe(res => {
        this.customer = res;
      }, error => console.log(error))
  }


  private withQueryParams() {
    let params = new HttpParams()
      .set("id", "12345")
      .set("comments", "this is a comment")

    let headers = new HttpHeaders().set('Myheader', 'header');

    //shortcut
    this.http.get<Customer>('http://localhost:8080/api/customer', {headers: headers, params})
      .subscribe(res => {
        this.customer = res;
      }, error => console.log(error))

    //use this if let params is named something else..
    this.http.get<Customer>('http://localhost:8080/api/customer', {params: params})
      .subscribe(res => {
        this.customer = res;
      }, error => console.log(error))
  }*/


  //////////////////////////////////////////////////
  customer: Customer

  constructor(private http: HttpClient, private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomer()
      .then(res => this.customer = res)
  }


}

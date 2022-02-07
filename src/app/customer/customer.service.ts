import {Injectable} from "@angular/core";
import {Customer} from "./customer.model";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";

// @Injectable({providedIn: "root"})
@Injectable()
export class CustomerService {

  customer: Customer;

  constructor(private http: HttpClient) {
  }

  getCustomer(): Promise<Customer> {
    return lastValueFrom(
      // this.http.get<Customer>('http://localhost:8080/api/customer')
      this.http.get<Customer>('https://csf-day6.herokuapp.com/api/customer')
    )
  }

  getCustomerAsObs(): Observable<Customer> {
    // return this.http.get<Customer>('http://localhost:8080/api/customer')
    return this.http.get<Customer>('https://csf-day6.herokuapp.com/api/customer')

  }

}

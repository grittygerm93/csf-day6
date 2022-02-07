import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Registration} from "./registration.model";
import {Observable} from "rxjs";
import {Customer} from "../customer/customer.model";
import {FormGroup} from "@angular/forms";

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  sendToServer(form: FormGroup): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let registration = new HttpParams()
      .set('name', form.get('name').value)
      .set('email', form.get('email').value);

    return this.http.post<any>('http://localhost:8080/api/register',
      registration.toString(),
      {headers: header});
  }


}

import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Registration} from "./registration.model";
import {lastValueFrom, Observable} from "rxjs";
import {Customer} from "../customer/customer.model";
import {FormGroup} from "@angular/forms";
import {ResponseMessage} from "./ResponseMessage";

// const URL = 'http://localhost:8080/api/register'
const URL = 'https://csf-day6.herokuapp.com/api/register'

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  sendToServer(form: FormGroup): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let registration = new HttpParams()
      .set('name', form.get('name').value)
      .set('email', form.get('email').value);

    return this.http.post<any>('https://csf-day6.herokuapp.com/api/register',
      registration.toString(),
      {headers: header});
  }

  postRegistration(reg: Registration): Promise<ResponseMessage> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const params = new HttpParams().set('name', reg.name).set('email', reg.email)

    return lastValueFrom(
      this.http.post<ResponseMessage>(URL, params.toString(), {headers})
      // this.http.post<ResponseMessage>(URL, reg, {headers})
      // this.http.post<ResponseMessage>(URL, reg) get unsupported mediatype 415
    //  post and get dont match get 404.. mediatype dont match get 415
    )
  }


}

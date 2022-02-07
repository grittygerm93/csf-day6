import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {from, lastValueFrom, map, Observable, Subscription} from "rxjs";
import {Customer} from "./customer/customer.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'day6';

  result: any = {}
  origin: string;
  userAgent: string;

  sub$: Subscription;


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    //returns observable
    //convention to put a '$' on observable variables
    this.asPromise('https://httpbin.org/get')
    // this.asObservable('https://httpbin.org/get');
    //convert observable to a promise
    // this.asPromise(result$);
  }

  //map, filter, take, debounce,
  private asObservable(url: string) {
    let result$ = this.http.get<any>(url)
      .pipe(map(result => {
        return {origin: result.origin, userAgent: result.headers['User-Agent']}
      }))

    result$ = from(lastValueFrom(result$))
    //from converts promise to observable
    //lastValueFrom converts observable to promise

    this.sub$ = result$.subscribe(result => {
      // this.result = result;
      // this.origin = result.origin;
      // this.userAgent = result.headers['User-Agent'];
      this.result = result;
      this.origin = result.origin;
      this.userAgent = result.userAgent;
    })
  }

  //in promise whatever you return becomes a promise
  private asPromise(url: string) {
    const result$ = this.http.get<any>(url,
      {params: new HttpParams().set('print', 'pretty')}
    )
    lastValueFrom(result$)
      .then(res => {
        // this.result = res;
        // this.origin = res.origin;
        // this.userAgent = res.headers['User-Agent'];
        return {origin: res.origin, userAgent: res.headers['User-Agent']}
      })
      .then(res => {
        this.result = res;
        this.origin = res.origin;
        this.userAgent = res.userAgent;
      })
      .catch(error => {
        this.result = error
      })
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  //  for flexibility for toggling just for this prog
  }

}

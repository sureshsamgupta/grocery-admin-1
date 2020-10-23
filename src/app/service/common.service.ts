import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
import {  HttpHeaders, HttpRequest, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService  {
  baseurl:string="13.234.42.204:3013/user/"
  key:string=""
  private port:any=":3001";
  private BASE_URL: string =""
  private _headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
	url: string;
  constructor(private _http: HttpClient ) { }
  getResponse(second_url: string, method: string, head: number = 0, data = null): any {
    this.BASE_URL= 'http://' + this.baseurl;
    console.log(this.baseurl)
    this.url = this.BASE_URL + second_url;
    if (method == 'POST'){
      this.key=localStorage.getItem('key')
      const header = new HttpHeaders();
        header.append("authorization", "basis " + this.key);
      header.append('Content-Type', 'application/json;');
      header.append('Access-Control-Allow{-Origin', '*');
      return this._http.post(this.url,(data),{headers: this.setHeaders()}).pipe(map((response: Response) => { return response; }));
    }else if (method == 'GET'){
      this.key=localStorage.getItem('key')
      return this._http.get(this.url,{headers: this.setHeaders()}).pipe(map((response: Response) => { return response; }));
    }else if (method == 'PUT'){
      return this._http.put(this.url,(data),{headers: this.setHeaders()}).pipe(map((response: Response) => { return response; }));
    }  
}

private setHeaders() {
  // return { headers: new HttpHeaders() };
  this.key = localStorage.getItem('key');
  // global.Headers = fetch.Headers;
  var headers = new HttpHeaders().append('Content-Type', 'application/json').append("authorization", "basis " + (this.key));


  //  const headers = new HttpHeaders().append('Content-Type', 'application/json').append('Authorization', this.token).append('Accept', 'application/json');;
  //  console.log('token',headers)
  return headers;

}

getLogin(url: String, method: String, data = null): any {
  console.log("hii");
  this.BASE_URL= 'http://' + this.baseurl;
  this.url = this.BASE_URL + url;
  console.log(this.url);
  if (method == 'GET') {
    return this._http.get(this.url, this.getHeader()).pipe(map(res =>
      this.extractData(res)
    ));
  } else if (method == 'POST') {
    return this._http.post(this.url, data, this.getHeader()).pipe(map(res =>
      this.extractData(res)
    ));
  }else  if (method == 'DEL') {
    return this._http.delete(this.url, this.getHeader()).pipe(map(res =>
      this.extractData(res)
    ));
  }
}

private extractData(body: any): any {
  return body;
}

private getHeader() {
  return { headers: new HttpHeaders() };

}


}

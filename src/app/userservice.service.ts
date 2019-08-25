import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) {
    this.http = http;
   }
   public request: any = {

       }

       saveUser(user: any, password: any): Observable<any> {
        console.log("message");
        //const headers = new HttpHeaders({'Access-Control-Allow-Orgin': "*"});
        //const header = new Headers({'Content-Type': 'application/json'});
        this.request.userName = user;
        this.request.password = password;
        console.log(this.request);
        return this.http.post('http://localhost:8080/register', this.request);
      }


      login(userName: string, password: string) {
        this.http.get("http://localhost:8080/hello", {responseType: 'text'}).subscribe(console.log)
        return this.http.post(`http://localhost:8080/authenticate`, { userName: userName, password: password })

      }
}

import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable'; 
@Injectable()

export class UserService {

   constructor(private http: Http) {}

    get(url: string): Observable<any> {
       return this.http.get(url)
           .map((response: Response) => <any>response.json())
           .catch(this.handleError);
   }

   private handleError(error: Response) {
       console.error(error);
       return Observable.throw(error.json().data || 'Server error');
   }       
 
}

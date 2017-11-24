import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class TestService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<Element[]> {
    return this.http.get<Element[]>(this.serviceUrl);
  }

}

export interface Element {
    name: string;
    email: string;
    phone: string;
    company: {
        name: string;
    }
}
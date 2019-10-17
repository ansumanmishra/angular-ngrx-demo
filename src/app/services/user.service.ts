import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {

    }

    getDynamicUsers(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
    }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  signUp(user: {email: string, password: string}): Observable<any> {
    return this.http.post('http://localhost:3000/auth/signup', user)
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _signUpUrL = 'http://localhost:3000/auth/signup';
  private _signInUrL = 'http://localhost:3000/auth/signin';
  private _forgotPassUrl = 'http://localhost:3000/auth/forgot-password';
  private _profileUrl = 'http://localhost:3000/users/profile';

  constructor(private http: HttpClient) {} 

  signUp(user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(this._signUpUrL, user);
  }

  signIn(user: any): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(this._signInUrL, user);
  }

  forgotPassword(user: any): Observable<any> {
    return this.http.post(this._forgotPassUrl, user);
  }
  
  isLoggedIn(): boolean {
    try{
      if(localStorage.getItem('accessToken')){
        return true;
      }else{
        return false;
      }
    }
    catch{
      return false;
    }
  }
  
  getProfile(): Observable<any> {
    if (!this.isLoggedIn()) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('accessToken')
    );

    return this.http.get<any>('http://localhost:3000/users/profile', {
      headers,
    });
  }

  logOut(): void {
    localStorage.clear();
    window.location.reload();
  }

}

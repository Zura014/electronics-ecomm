import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}

  signUp(user: {
    username: string;
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

  sessionExpiration(time: number) {
    setTimeout(() => {
      localStorage.clear()
    }, time);
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

  logOut(): void {
    localStorage.clear();
    window.location.reload();
  }

}

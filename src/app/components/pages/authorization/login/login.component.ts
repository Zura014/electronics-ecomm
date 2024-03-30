import { Component, Input, OnInit, inject } from '@angular/core';
import { TopCol } from '../../../../interfaces/topcol.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { passwordValidator } from '../../../../validators/password.validator';
import { Router } from '@angular/router';
import { UserInterface } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  router = inject(Router);
  isLoggedIn: boolean = false;
  
  passCorrect: boolean = true || false;

  fP: boolean = false;

  topColContent: TopCol = {
    title: 'Account',
    pageHREF: 'home',
    location: [''],
  };

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      passwordValidator(),
      Validators.maxLength(32),
    ]),
  });
  fPForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }


  signIn(): void {
    const user = this.loginForm.value;
    if (this.loginForm.valid) {
      this.authService.signIn(user).subscribe((response) => {
          try{
          localStorage.setItem('accessToken', response.accessToken);
          this.passCorrect = true;
          window.location.replace('/home');
        }
          catch (error) {
            alert('Invalid Credidentials!')
            this.passCorrect = false;
            this.loginForm.controls['password'].reset()
          }
      });
    }
  }

  forgotPass(): void {
    const user = this.fPForm.value;
    if(this.fPForm.valid){
      this.authService.forgotPassword(user).subscribe(res => {
        this.router.navigateByUrl('/login');
      })
    } 
  }
}

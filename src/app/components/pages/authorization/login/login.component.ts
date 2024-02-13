import { Component, inject } from '@angular/core';
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
export class LoginComponent {
  router = inject(Router);

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

  signIn(): void {
    const user = this.loginForm.value;
    this.authService.signIn(user).subscribe((response) => {
      localStorage.setItem('accessToken', response.accessToken);
      this.router.navigateByUrl('/');
    });
  }

  forgotPass(): void {
    console.log(this.loginForm.value);
  }
}

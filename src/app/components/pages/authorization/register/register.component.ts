import { Component, OnInit, inject } from '@angular/core';
import { TopCol } from '../../../../interfaces/topcol.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { passwordValidator } from '../../../../validators/password.validator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  router = inject(Router);

  topColContent: TopCol = {
    title: 'Create Account',
    pageHREF: 'home',
    location: ['']
  };

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), passwordValidator(), Validators.maxLength(32)]),
  });


  constructor(private authservice: AuthService) {
  }  
  signUp(): void{

    if(this.registerForm.valid){
      const user = {
        username: this.registerForm.get('firstName')?.value + this.registerForm.get('lastName')?.value || '',
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value
      }
  
      this.authservice
      .signUp(user)
      .subscribe((user) => this.authservice.signUp(user));
      this.registerForm.reset();
      this.router.navigateByUrl('/login')
    }
  }

}

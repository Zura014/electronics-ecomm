import { Component, OnInit } from '@angular/core';
import { TopCol } from '../../../../interfaces/topcol.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { passwordValidator } from '../../../../validators/password.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  topColContent: TopCol = {
    title: 'Create Account',
    pageHREF: 'home',
    location: ['']
  };

  myForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), passwordValidator(), Validators.maxLength(32)]),
  });


  constructor(private authservice: AuthService) {
  }  
  signUp(): void{

    if(this.myForm.valid){
      const user = {
        username: this.myForm.get('firstName')?.value + this.myForm.get('lastName')?.value || '',
        email: this.myForm.get('email')?.value,
        password: this.myForm.get('password')?.value
      }
  
      this.authservice
      .signUp(user)
      .subscribe((user) => 
        this.authservice.signUp(user)
      );
      this.myForm.reset();
    }
  }
}

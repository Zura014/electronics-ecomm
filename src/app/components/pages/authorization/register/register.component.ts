import { Component, OnInit } from '@angular/core';
import { TopCol } from '../../../../interfaces/topcol.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  email: string = '';
  password: string = '';

  topColContent: TopCol = {
    title: 'Create Account',
    pageHREF: 'home',
    location: ['']
  };

  myForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });


  constructor(private authservice: AuthService) {
  }  
  signUp(): void{
    const user = {
      email: this.email,
      password: this.password
    }

    this.authservice
    .signUp(user)
    .subscribe((user) => 
      this.authservice.signUp(user)
    )

  }
}

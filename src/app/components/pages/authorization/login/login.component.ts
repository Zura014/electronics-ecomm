import { Component } from '@angular/core';
import { TopCol } from '../../../../interfaces/topcol.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  topColContent: TopCol = {
    title: 'Account',
    pageHREF: 'home',
    location: ['']
  };
  myForm!: FormGroup;


  constructor() {
  }
  onSubmit(): void{
    console.log(this.myForm.value);
  }
}

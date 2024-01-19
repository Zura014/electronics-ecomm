import { Component } from '@angular/core';
import { TopCol } from '../../../../interfaces/topcol.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
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
  myForm!: FormGroup;


  constructor() {
  }
  onSubmit(): void{
    console.log(this.myForm.value);
  }
}

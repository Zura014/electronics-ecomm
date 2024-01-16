import { Component } from '@angular/core';
import { TopCol } from '../../../../interfaces/topcol.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  topColContent: TopCol = {
    title: 'Create Account',
    pageHREF: 'home',
    location: ['a', 'a', 'b', 'c', 'd', 'e', 's']
  };

}

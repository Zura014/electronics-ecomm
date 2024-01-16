import { Component } from '@angular/core';
import { TopCol } from '../../../../interfaces/topcol.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  
  topColContent: TopCol = {
    title: 'Account',
    pageHREF: 'home',
    location: ['a', 'a', 'b', 'c', 'd', 'e', 's']
  };
}

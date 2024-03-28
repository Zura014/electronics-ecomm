import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TopCol } from '../../../interfaces/topcol.interface';
import { UserInterface } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  
  user = {
    firstName: '',
    lastName: '',
  }
  firstName = this.user.firstName;
  lastName = this.user.lastName;

  constructor(private authService: AuthService) { }

  topColContent: TopCol = {
    title: 'Account',
    pageHREF: 'home',
    location: ['']
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(data => {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
    })
  }

  logOut(): void {
    this.authService.logOut();
  }
}

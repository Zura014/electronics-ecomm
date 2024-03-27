import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TopCol } from '../../../interfaces/topcol.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  
  user = {
    name: '',
    lastName: '',
  }

  constructor(private authService: AuthService) { }

  topColContent: TopCol = {
    title: 'Account',
    pageHREF: 'home',
    location: ['']
  }

  ngOnInit(): void {
    //get decoded data from server
  }

  logOut(): void {
    this.authService.logOut();
  }
}

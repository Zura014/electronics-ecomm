import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'electronics-ecomm';
  isLoggedIn: boolean = false;
  
  constructor(private route: ActivatedRoute,private authService: AuthService) {  }

  ngOnInit(): void {
    // this.isLoggedIn = this.authService.isLoggedIn();
  }
}

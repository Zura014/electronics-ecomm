import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'electronics-ecomm';
  isLoggedIn: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
}

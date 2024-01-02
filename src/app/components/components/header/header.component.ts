import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isClickedBM: boolean = false;
  isClickedSearch: boolean = false;
  bme: boolean = false;
  bmeh: boolean = false;
  bmec: boolean = false;
  bmem: boolean = false;
  

  toggleBmem(): void { 
    this.bmem = !this.bmem;
  }
  toggleBmec(): void { 
    this.bmec = !this.bmec;
  }
  toggleBmeh(): void { 
    this.bmeh = !this.bmeh;
  }
  toggleBme(): void { 
    this.bme = !this.bme;
  }
  toggleSearch(){
    this.isClickedSearch = !this.isClickedSearch;
  }
  toggleBM(){
    this.isClickedBM =!this.isClickedBM;
  }
}

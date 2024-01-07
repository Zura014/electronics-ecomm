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
  ddcur: boolean = false;
  ddlang: boolean = false;
  
  dDCur(): void {
    if(this.ddlang){
      this.ddcur = true;
      this.ddlang = false;
    } else{
      this.ddcur =!this.ddcur;
    }
  }
  dDLang(): void{
    if(this.ddcur){
      this.ddlang = true
      this.ddcur = false;
    }else{
      this.ddlang = !this.ddlang;
    }
  }
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

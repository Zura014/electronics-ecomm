import { Component, OnInit } from '@angular/core';
import { Offer } from '../../../interfaces/offer.interface';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isClickedBM: boolean = false;
  isClickedSearch: boolean = false;
  bme: boolean = false;
  bmeh: boolean = false;
  bmec: boolean = false;
  bmem: boolean = false;
  bmes: boolean = false;
  ddcur: boolean = false;
  ddlang: boolean = false;
  clickedBAC: boolean = false;
  cpfp: boolean = false;
  isLoggedIn: boolean = false;
  

  constructor(private as: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.as.isLoggedIn();      
  }

  toggleBac(): void{
    this.clickedBAC =!this.clickedBAC;
  }

  offers: Offer[] = [
    {
      title: 'electronics',
      subcategories: [
        'android tv',
        'apple ipad',
        'android tablet',
        'cell phones',
        'wireless printer',
        'air purifier',
        'apple ipad',
        'earbuds bose',
        'cell phones',
        'control speakers',
        'smart mobiles',
        'electronics'
      ],
      href: '',
    },
    {
      title: "today's deal",
      subcategories: [
        
      ],
      href: '',
    },
    {
      title: 'summer sale',
      subcategories: [
        
      ],
      href: '',
    },
    {
      title: 'smart mobiles',
      subcategories: [
        
      ],
      href: '',
    },
    {
      title: 'mobile accessories',
      subcategories: [
        
      ],
      href: '',
    },
    {
      title: 'computer accessories',
      subcategories: [
        
      ],
      href: '',
    },
    {
      title: 'smart phone',
      subcategories: [
        
      ],
      href: '',
    },
    {
      title: 'control speakers',
      subcategories: [
        
      ],
      href: '',
    },
    {
      title: 'android tv',
      subcategories: [
        
      ],
      href: '',
    },
    {
      title: 'game controller',
      subcategories: [
        
      ],
      href: '',
    },
    {
      title: 'smart watch',
      subcategories: [
        
      ],
      href: '',
    },
    {
      title: 'air purifier',
      subcategories: [
        
      ],
      href: '',
    },
    {
      title: 'computer & laptop',
      subcategories: [
        
      ],
      href: '',
    },
  ];

  dDCur(): void {
    if (this.ddlang) {
      this.ddcur = true;
      this.ddlang = false;
    } else {
      this.ddcur = !this.ddcur;
    }
  }
  dDLang(): void {
    if (this.ddcur) {
      this.ddlang = true;
      this.ddcur = false;
    } else {
      this.ddlang = !this.ddlang;
    }
  }
}

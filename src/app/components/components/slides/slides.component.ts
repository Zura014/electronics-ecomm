import { Component, OnInit } from '@angular/core';
import { Slide } from '../../../interfaces/slide.interface';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.css'
})
export class SlidesComponent implements OnInit {

  slides: Slide[] = [];

  ngOnInit() {
    
    this.slides = [
      {
        discount: 'Flat 40% Discount',
        title: 'Boat Rockerz 510 \n Wireless Headphones',
        price: '120.36',
        img: '//electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-1_28653a91-d32d-418b-979b-3fff8aebb119.jpg?v=1704449209&amp;width=1903',
        imgsrcset: '//electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-1_28653a91-d32d-418b-979b-3fff8aebb119.jpg?v=1704449209&amp;width=375 375w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-1_28653a91-d32d-418b-979b-3fff8aebb119.jpg?v=1704449209&amp;width=550 550w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-1_28653a91-d32d-418b-979b-3fff8aebb119.jpg?v=1704449209&amp;width=750 750w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-1_28653a91-d32d-418b-979b-3fff8aebb119.jpg?v=1704449209&amp;width=1100 1100w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-1_28653a91-d32d-418b-979b-3fff8aebb119.jpg?v=1704449209&amp;width=1500 1500w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-1_28653a91-d32d-418b-979b-3fff8aebb119.jpg?v=1704449209&amp;width=1780 1780w',
      },
      {
        discount: 'Flat 35% Discount',
        title: 'Google Unveils \n Home Mini & Speaker',
        price: '99.89',
        img: '//electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-2_becdbe43-a4b9-43b1-b8a0-c2a8136dea6e.jpg?v=1704449209&amp;width=1903',
        imgsrcset: '//electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-2_becdbe43-a4b9-43b1-b8a0-c2a8136dea6e.jpg?v=1704449209&amp;width=375 375w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-2_becdbe43-a4b9-43b1-b8a0-c2a8136dea6e.jpg?v=1704449209&amp;width=550 550w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-2_becdbe43-a4b9-43b1-b8a0-c2a8136dea6e.jpg?v=1704449209&amp;width=750 750w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-2_becdbe43-a4b9-43b1-b8a0-c2a8136dea6e.jpg?v=1704449209&amp;width=1100 1100w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-2_becdbe43-a4b9-43b1-b8a0-c2a8136dea6e.jpg?v=1704449209&amp;width=1500 1500w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-2_becdbe43-a4b9-43b1-b8a0-c2a8136dea6e.jpg?v=1704449209&amp;width=1780 1780w'
      },
      {
        discount: 'Flat 30% Discount',
        title: 'Oculus Rift With \n Touch Virtual Reality',
        price: '149.99',
        img: '//electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-3.jpg?v=1704862315&amp;width=1903',
        imgsrcset: '//electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-3.jpg?v=1704862315&amp;width=375 375w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-3.jpg?v=1704862315&amp;width=550 550w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-3.jpg?v=1704862315&amp;width=750 750w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-3.jpg?v=1704862315&amp;width=1100 1100w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-3.jpg?v=1704862315&amp;width=1500 1500w, //electshop-codezeel.myshopify.com/cdn/shop/files/main-banner-3.jpg?v=1704862315&amp;width=1780 1780w',
      }
    ]

  }


  currentIndex = 0;


  prev(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length ) % this.slides.length;

  }




}
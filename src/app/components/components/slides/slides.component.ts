import { Component, OnInit } from '@angular/core';
import { SliderInterface } from '../../../interfaces/slider.interface';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.css'
})
export class SlidesComponent implements OnInit {

  slides: SliderInterface[] = [];
  currentIndex: number = 0;

  ngOnInit() {
    
    this.slides = [
      {
        discount: 'Flat 40% Discount',
        title: 'Boat Rockerz 510 \n Wireless Headphones',
        price: '120.36',
        img: '../../../assets/main-banner-1_28653a91-d32d-418b-979b-3fff8aebb119.png',
      },
      {
        discount: 'Flat 35% Discount',
        title: 'Google Unveils \n Home Mini & Speaker',
        price: '99.89',
        img: '../../../assets/main-banner-2_becdbe43-a4b9-43b1-b8a0-c2a8136dea6e.jpg',

      },
      {
        discount: 'Flat 30% Discount',
        title: 'Oculus Rift With \n Touch Virtual Reality',
        price: '149.99',
        img: '../../../assets/main-banner-3.png', 
      }
    ]

  }
  
  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].img})`
  }
}
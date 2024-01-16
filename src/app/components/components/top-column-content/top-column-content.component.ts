import { Component, Input } from '@angular/core';
import { TopCol } from '../../../interfaces/topcol.interface';

@Component({
  selector: 'top-column-content',
  templateUrl: './top-column-content.component.html',
  styleUrl: './top-column-content.component.css'
})
export class TopColumnContentComponent {

  @Input()  topColContent: TopCol = {
    title: '',
    pageHREF: '',
    location: []
  }

}

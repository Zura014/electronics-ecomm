import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopColumnContentComponent } from './top-column-content.component';

describe('TopColumnContentComponent', () => {
  let component: TopColumnContentComponent;
  let fixture: ComponentFixture<TopColumnContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopColumnContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopColumnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

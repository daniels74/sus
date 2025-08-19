import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselElementComponent } from './carousel-element.component';

describe('CarouselElementComponent', () => {
  let component: CarouselElementComponent;
  let fixture: ComponentFixture<CarouselElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { susComponent } from './sus.component';

describe('susComponent', () => {
  let component: susComponent;
  let fixture: ComponentFixture<susComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [susComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(susComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

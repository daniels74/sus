import { ComponentFixture, TestBed } from '@angular/core/testing';

import { genesComponent } from './genes.component';

describe('genesComponent', () => {
  let component: genesComponent;
  let fixture: ComponentFixture<genesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [genesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(genesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

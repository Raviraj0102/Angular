import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaComponent } from './india.component';

describe('IndiaComponent', () => {
  let component: IndiaComponent;
  let fixture: ComponentFixture<IndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicancesComponent } from './applicances.component';

describe('ApplicancesComponent', () => {
  let component: ApplicancesComponent;
  let fixture: ComponentFixture<ApplicancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

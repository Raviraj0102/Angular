import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineapplicationComponent } from './onlineapplication.component';

describe('OnlineapplicationComponent', () => {
  let component: OnlineapplicationComponent;
  let fixture: ComponentFixture<OnlineapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineapplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

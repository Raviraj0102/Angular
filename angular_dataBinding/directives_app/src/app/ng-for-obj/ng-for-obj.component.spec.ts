import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForObjComponent } from './ng-for-obj.component';

describe('NgForObjComponent', () => {
  let component: NgForObjComponent;
  let fixture: ComponentFixture<NgForObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgForObjComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgForObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

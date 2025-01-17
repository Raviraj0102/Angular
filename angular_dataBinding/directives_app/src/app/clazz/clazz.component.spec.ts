import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClazzComponent } from './clazz.component';

describe('ClazzComponent', () => {
  let component: ClazzComponent;
  let fixture: ComponentFixture<ClazzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClazzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClazzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

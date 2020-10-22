import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorcategoryComponent } from './calculatorcategory.component';

describe('CalculatorcategoryComponent', () => {
  let component: CalculatorcategoryComponent;
  let fixture: ComponentFixture<CalculatorcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

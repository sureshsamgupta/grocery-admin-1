import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatordataComponent } from './calculatordata.component';

describe('CalculatordataComponent', () => {
  let component: CalculatordataComponent;
  let fixture: ComponentFixture<CalculatordataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatordataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatordataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

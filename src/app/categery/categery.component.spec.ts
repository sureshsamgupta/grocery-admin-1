import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategeryComponent } from './categery.component';

describe('CategeryComponent', () => {
  let component: CategeryComponent;
  let fixture: ComponentFixture<CategeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuncipartiComponent } from './munciparti.component';

describe('MuncipartiComponent', () => {
  let component: MuncipartiComponent;
  let fixture: ComponentFixture<MuncipartiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuncipartiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuncipartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

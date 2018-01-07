import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCustomersComponent } from './summary-customers.component';

describe('SummaryCustomersComponent', () => {
  let component: SummaryCustomersComponent;
  let fixture: ComponentFixture<SummaryCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

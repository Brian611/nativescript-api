import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTopupsComponent } from './summary-topups.component';

describe('SummaryTopupsComponent', () => {
  let component: SummaryTopupsComponent;
  let fixture: ComponentFixture<SummaryTopupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTopupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

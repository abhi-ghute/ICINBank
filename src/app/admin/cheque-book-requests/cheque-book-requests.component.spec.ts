import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeBookRequestsComponent } from './cheque-book-requests.component';

describe('ChequeBookRequestsComponent', () => {
  let component: ChequeBookRequestsComponent;
  let fixture: ComponentFixture<ChequeBookRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeBookRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeBookRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

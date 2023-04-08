import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBookRequestComponent } from './check-book-request.component';

describe('CheckBookRequestComponent', () => {
  let component: CheckBookRequestComponent;
  let fixture: ComponentFixture<CheckBookRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBookRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBookRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

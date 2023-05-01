import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounrDetailsComponent } from './accounr-details.component';

describe('AccounrDetailsComponent', () => {
  let component: AccounrDetailsComponent;
  let fixture: ComponentFixture<AccounrDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccounrDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccounrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

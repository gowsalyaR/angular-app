import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestDetailsComponent } from './invest-details.component';

describe('InvestDetailsComponent', () => {
  let component: InvestDetailsComponent;
  let fixture: ComponentFixture<InvestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestDetailsComponent]
    });
    fixture = TestBed.createComponent(InvestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

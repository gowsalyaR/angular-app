import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendDetailsComponent } from './spend-details.component';

describe('SpendDetailsComponent', () => {
  let component: SpendDetailsComponent;
  let fixture: ComponentFixture<SpendDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpendDetailsComponent]
    });
    fixture = TestBed.createComponent(SpendDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

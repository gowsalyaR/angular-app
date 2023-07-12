import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailsComponent } from './main-details.component';

describe('MainDetailsComponent', () => {
  let component: MainDetailsComponent;
  let fixture: ComponentFixture<MainDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDetailsComponent]
    });
    fixture = TestBed.createComponent(MainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninDetailsComponent } from './signin-details.component';

describe('SigninDetailsComponent', () => {
  let component: SigninDetailsComponent;
  let fixture: ComponentFixture<SigninDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninDetailsComponent]
    });
    fixture = TestBed.createComponent(SigninDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

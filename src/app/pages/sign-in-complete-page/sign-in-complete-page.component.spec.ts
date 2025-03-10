import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInCompletePageComponent } from './sign-in-complete-page.component';

describe('SignInCompletePageComponent', () => {
  let component: SignInCompletePageComponent;
  let fixture: ComponentFixture<SignInCompletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInCompletePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInCompletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

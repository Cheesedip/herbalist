import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { FirebaseError } from '@angular/fire/app';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface SignUpForm {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

@Component({
  selector: 'app-sign-up-page',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPageComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private formBuilder = inject(NonNullableFormBuilder);

  protected signUpForm: FormGroup<SignUpForm> = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required], // TODO add validator that password must be the same
  });

  public signUp() {
    if (!this.signUpForm.valid) {
      return;
    }

    const signUpForm = this.signUpForm.getRawValue();
    if (signUpForm.password !== signUpForm.confirmPassword) {
      alert('TODO: add validator -> Passwords do not match');
      return;
    }

    this.authService
      .signUp(signUpForm.email, signUpForm.password)
      .then(() => {
        console.log('Account created successfully!');
        this.router.navigate(['/']);
      })
      .catch((error: FirebaseError) => {
        let errorMessage = 'An error occurred.';
        if (error.code === 'auth/email-already-in-use') {
          errorMessage = 'This email is already in use.';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Please enter a valid email address.';
        } else if (error.code === 'auth/weak-password') {
          errorMessage = 'The password is too weak.';
        }
        console.error(errorMessage);
        alert(errorMessage);
      });
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  Auth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from '@angular/fire/auth';
import { LocalStorageService } from '../../services/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  EMAIL_FOR_SIGN_IN,
  PAGE_KEY,
} from '../sign-in-page/sign-in-page.component';
import { EmailFormComponent } from '../../components/email-form/email-form.component';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

function isFireBaseSignInResponse(
  response: any
): response is FirebaseSignInResponse {
  return (
    response.apiKey !== undefined &&
    response.lang !== undefined &&
    response.mode !== undefined &&
    response.oobCode !== undefined
  );
}

type FirebaseSignInResponse = {
  apiKey: string;
  lang: string;
  mode: string;
  oobCode: string;
};

@Component({
  selector: 'app-sign-in-complete-page',
  imports: [EmailFormComponent, CommonModule],
  templateUrl: './sign-in-complete-page.component.html',
  styleUrl: './sign-in-complete-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: LocalStorageService,
      useFactory: () => new LocalStorageService(PAGE_KEY), // should be the same page key as the sign-in page
    },
  ],
})
export class SignInCompletePageComponent {
  private activatedRoute = inject(ActivatedRoute);
  private localStorageService = inject(LocalStorageService);
  private auth = inject(Auth);
  private router = inject(Router);
  private toastrService = inject(ToastrService);

  protected needsEmailConfirmation = signal(false);

  constructor() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (isFireBaseSignInResponse(params)) {
        this.completeSignIn();
      } else {
        console.error('Invalid sign-in response', params);
      }
    });
  }

  private completeSignIn(): void {
    if (isSignInWithEmailLink(this.auth, window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = this.localStorageService.get(EMAIL_FOR_SIGN_IN);
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        this.needsEmailConfirmation.set(true);
      } else {
        this.finalize(email);
      }
    }
  }

  protected finalize(email: string) {
    if (!email) {
      throw new Error('no email provided');
    }

    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(this.auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem(EMAIL_FOR_SIGN_IN);
        // You can access the new user by importing getAdditionalUserInfo
        // and calling it with result:
        // getAdditionalUserInfo(result)
        // You can access the user's profile via:
        // getAdditionalUserInfo(result)?.profile
        // You can check if the user is new or existing:
        // getAdditionalUserInfo(result)?.isNewUser
        this.router.navigate(['/gather']);
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
        //TODO: toastr
        this.toastrService.error(error.message, 'Something went wrong');
      });
  }
}

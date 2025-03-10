import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Auth, sendSignInLinkToEmail } from '@angular/fire/auth';
import { actionCodeSettings } from '../../../config/action-code.config';
import { LocalStorageService } from '../../services/local-storage.service';

import { CommonModule } from '@angular/common';
import { EmailFormComponent } from '../../components/email-form/email-form.component';
import { ToastrService } from 'ngx-toastr';

export const PAGE_KEY = 'sign-in-page';
export const EMAIL_FOR_SIGN_IN = 'emailForSignIn';

@Component({
  selector: 'app-sign-in-page',
  imports: [CommonModule, EmailFormComponent],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: LocalStorageService,
      useFactory: () => new LocalStorageService(PAGE_KEY),
    },
  ],
})
export class SignInPageComponent {
  private auth = inject(Auth);
  private localStorageService = inject(LocalStorageService);
  private toastrService = inject(ToastrService);

  protected emailSubmitted = signal(false);

  protected signIn(email: string) {
    this.emailSubmitted.set(true);

    sendSignInLinkToEmail(this.auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        this.localStorageService.set(EMAIL_FOR_SIGN_IN, email);
        this.toastrService.success(
          'Check your email and follow the link to complete signing in',
          'Email sent',
          { timeOut: 10000 }
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.toastrService.error(errorMessage, 'Something went wrong');
      });
  }
}

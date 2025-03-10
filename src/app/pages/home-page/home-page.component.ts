import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { BackpackComponent } from '../../ui-components/backpack/backpack.component';
import { DialogService } from '@ngneat/dialog';
import { AboutModalComponent } from '../../components/about-modal/about-modal.component';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule, BackpackComponent, AboutModalComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private router = inject(Router);
  private dialog = inject(DialogService);
  private auth = inject(Auth);
  private appRef = inject(ApplicationRef);

  protected activeTab = signal('');
  protected user = signal<User | null>(null);

  get currentUser(): User | null {
    return this.user();
  }

  constructor() {
    this.subscribeToRouteChanges();
    this.subscribeToAuthStateChanges();
  }

  protected openAboutModal(): void {
    this.dialog.open(AboutModalComponent);
  }

  protected openAppExplanationModal(): void {
    this.dialog.open(AboutModalComponent);
  }

  protected signInOrOut(): void {
    if (this.user() === null) {
      this.router.navigate(['/sign-in']);
      return;
    } else {
      this.auth.signOut();
      this.user.set(null);
    }
  }

  protected getTranslation(): string {
    return this.user() === null ? 'Sign In' : 'Sign Out';
  }

  private subscribeToAuthStateChanges(): void {
    onAuthStateChanged(this.auth, (user) => {
      console.log({ user });
      if (user) {
        this.user.set(user);
        this.appRef.tick();
        console.log(this.user());
      } else {
        console.log('No user is logged in.');
      }
    });
  }

  private subscribeToRouteChanges(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const path = this.router.url;
        console.log({ path });
        if (path === '/') {
          this.router.navigate(['/gather']);
        }
        this.activeTab.set(
          path.includes('gather') || path === '/'
            ? 'gather'
            : path.includes('ingredients')
            ? 'ingredients'
            : path.includes('recipes')
            ? 'recipes'
            : ''
        );
      });
  }
}

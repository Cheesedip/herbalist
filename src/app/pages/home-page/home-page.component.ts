import {
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

@Component({
  selector: 'app-home-page',
  imports: [RouterModule, BackpackComponent, AboutModalComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  protected activeTab = signal('');
  private router = inject(Router);
  private dialog = inject(DialogService);
  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const path = this.router.url;
        this.activeTab.set(
          path.includes('gather')
            ? 'gather'
            : path.includes('ingredients')
            ? 'ingredients'
            : path.includes('recipes')
            ? 'recipes'
            : ''
        );
      });
    this.router.navigate(['gather']);
  }

  openAboutModal(): void {
    this.dialog.open(AboutModalComponent);
  }
}

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { BackpackComponent } from '../../ui-components/backpack/backpack.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule, BackpackComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  protected activeTab = signal('');
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const path = this.router.url;
        this.activeTab.set(
          path.includes('gather')
            ? 'gather'
            : path.includes('plants')
            ? 'plants'
            : path.includes('recipes')
            ? 'recipes'
            : ''
        );
      });
    this.router.navigate(['gather']);
  }
}

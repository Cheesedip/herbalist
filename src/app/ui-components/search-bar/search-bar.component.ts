import {
  Component,
  signal,
  ChangeDetectionStrategy,
  output,
} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  public search = output<string>();

  onInput(event: Event): void {
    this.search.emit((event.target as HTMLInputElement).value);
  }
}

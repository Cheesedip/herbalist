import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  Signal,
  signal,
} from '@angular/core';
import { SortingService, SortType } from './sorting.service';

@Component({
  selector: 'app-sortable-header',
  imports: [],
  templateUrl: './sortable-header.component.html',
  styleUrl: './sortable-header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortableHeaderComponent {
  private sortingService = inject(SortingService);

  public header = input.required<string>();
  private attributeName = computed(() => this.header().toLowerCase());

  public sortAscending = output<boolean>();
  public sortDescending = output<boolean>();

  get activeSort(): Signal<SortType> {
    return this._activeSort;
  }

  protected readonly CurrentSort = SortType;
  protected _activeSort = signal<SortType>(SortType.None);

  protected srcAscending = computed(() =>
    this.activeSort() === SortType.Ascending
      ? '/assets/sort/asc_selected.webp'
      : '/assets/sort/asc_unselected.webp'
  );

  protected srcDescending = computed(() =>
    this.activeSort() === SortType.Descending
      ? '/assets/sort/desc_selected.webp'
      : '/assets/sort/desc_unselected.webp'
  );

  protected toggleSort(sort: SortType.Ascending | SortType.Descending): void {
    switch (this.activeSort()) {
      case SortType.None:
        this._activeSort.set(sort);
        break;
      case SortType.Ascending:
        this._activeSort.set(
          sort === SortType.Ascending ? SortType.None : SortType.Descending
        );
        break;
      case SortType.Descending:
        this._activeSort.set(
          sort === SortType.Descending ? SortType.None : SortType.Ascending
        );
        break;
    }

    if (this.activeSort() !== SortType.None) {
      this.sortingService.setSortBy(this.attributeName());
      this.sortingService.setSortType(this.activeSort());
    }
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  Signal,
} from '@angular/core';
import {
  SortingService,
  SortType,
} from '../../services/sorting/sorting.service';

@Component({
  selector: 'app-sortable-header',
  imports: [],
  templateUrl: './sortable-header.component.html',
  styleUrl: './sortable-header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortableHeaderComponent {
  private sortingService = inject(SortingService) as SortingService<string>;

  constructor() {
    this.sortBy = this.sortingService.sortBy;
    this.sortType = this.sortingService.sortType;
  }

  public header = input.required<Capitalize<string>>();
  private attributeName = computed(() =>
    this.header().toLowerCase()
  ) as Signal<string>;

  protected sortBy;
  protected sortType;

  protected readonly CurrentSort = SortType;

  protected srcAscending = computed(() => {
    const sortBy = this.sortBy();
    const sortType = this.sortType();
    const attributeName = this.attributeName();

    return sortBy === attributeName && sortType === SortType.Ascending
      ? '/assets/sort/asc_selected.webp'
      : '/assets/sort/asc_unselected.webp';
  });

  protected srcDescending = computed(() => {
    const sortBy = this.sortBy();
    const sortType = this.sortType();
    const attributeName = this.attributeName();

    return sortBy === attributeName && sortType === SortType.Descending
      ? '/assets/sort/desc_selected.webp'
      : '/assets/sort/desc_unselected.webp';
  });

  protected toggleSort(
    sortType: SortType.Ascending | SortType.Descending
  ): void {
    this.sortingService.toggleSort(this.attributeName(), sortType);
  }
}

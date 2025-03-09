import { computed, signal } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

export enum SortType {
  Ascending = 'ascending',
  Descending = 'descending',
}

export class SortingService<SortBy extends string> {
  private sortByOptions: SortBy[] = [];
  private localStorageService: LocalStorageService;

  constructor(
    private sortByFunctions: Record<SortBy, (a: any, b: any) => boolean>,
    localStoragePageKey: string
  ) {
    this.localStorageService = new LocalStorageService(localStoragePageKey);

    this.sortByOptions = Object.keys(sortByFunctions) as SortBy[];
    if (this.sortByOptions.length === 0) {
      throw new Error('sortByFunctions cannot be empty');
    }

    const previousSortBy = this.localStorageService.get('sortBy');
    const previousSortType = this.localStorageService.get('sortType');
    // Toggle default sort
    this.toggleSort(
      previousSortBy !== null
        ? (previousSortBy as SortBy)
        : this.sortByOptions[0],
      previousSortType !== null
        ? (previousSortType as SortType)
        : SortType.Ascending
    );
  }

  private _sortBy = signal<SortBy | null>(null);
  private _sortType = signal(SortType.Ascending);

  public readonly sortByFn = computed(() => {
    const sortBy = this._sortBy();
    const sortType = this._sortType();

    if (sortBy === null) {
      return;
    }

    return (a: any, b: any) => {
      if (this.sortByFunctions[sortBy](a, b)) {
        return sortType === SortType.Ascending ? -1 : 1;
      } else {
        return sortType === SortType.Ascending ? 1 : -1;
      }
    };
  });

  public get sortBy() {
    return this._sortBy;
  }

  public get sortType() {
    return this._sortType;
  }

  public toggleSort(sortBy: SortBy, sortType: SortType) {
    // In case someone unselects the current sort
    if (sortBy === this.sortBy() && sortType == this.sortType()) {
      this._sortBy.set(null);
      return;
    }

    this._sortBy.set(sortBy);
    this._sortType.set(sortType);

    // Set the sort to local storage
    this.localStorageService.set('sortBy', sortBy);
    this.localStorageService.set('sortType', sortType);
  }
}

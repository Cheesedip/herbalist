import { computed, signal } from '@angular/core';

export enum SortType {
  Ascending,
  Descending,
}

export class SortingService<SortBy extends string> {
  private sortByOptions: SortBy[] = [];

  constructor(
    private sortByFunctions: Record<SortBy, (a: any, b: any) => boolean>
  ) {
    this.sortByOptions = Object.keys(sortByFunctions) as SortBy[];
    if (this.sortByOptions.length === 0) {
      throw new Error('sortByFunctions cannot be empty');
    }

    // Toggle default sort
    this.toggleSort(this.sortByOptions[0], SortType.Ascending);
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
  }
}

import { computed, Injectable, signal } from '@angular/core';

export enum SortType {
  Ascending,
  Descending,
  None,
}
@Injectable({
  providedIn: 'root',
})
export class SortingService {
  private _sortBy = signal<string | null>(null);
  private _sortType = signal(SortType.Ascending);

  public readonly sortByFn = computed(() => {
    let sortBy = this._sortBy();
    let sortType = this._sortType();

    // Default sorting
    if (sortBy === null || sortType === SortType.None) {
      sortBy = 'name';
      sortType = SortType.Ascending;
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

  public setSortBy(sortBy: string) {
    this._sortBy.set(sortBy);
  }

  public setSortType(sortType: SortType) {
    this._sortType.set(sortType);
  }

  private sortByFunctions: Record<string, (a: any, b: any) => boolean> = {
    name: (a, b) => a.name.localeCompare(b.name) < 0,
    biome: (a, b) => a.biome.localeCompare(b.biome) < 0,
    rarity: (a, b) => a.rarity.localeCompare(b.rarity) < 0,
    appearance: (a, b) => a.appearance.localeCompare(b.appearance) < 0,
  };
}

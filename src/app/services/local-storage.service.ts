import { LOCAL_STORAGE_VERSION_KEY } from '../version';

export class LocalStorageService {
  constructor(private localStoragePageKey: string) {}

  public get(itemKey: string): string | null {
    return localStorage.getItem(
      `${LOCAL_STORAGE_VERSION_KEY}-${this.localStoragePageKey}-${itemKey}`
    );
  }

  public set(itemKey: string, value: string): void {
    localStorage.setItem(
      `${LOCAL_STORAGE_VERSION_KEY}-${this.localStoragePageKey}-${itemKey}`,
      value
    );
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';
import { InventoryStore } from '../../../data/inventory/inventory.store';

@Component({
  selector: 'app-backpack',
  standalone: true,
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ItemComponent, CommonModule],
})
export class BackpackComponent {
  readonly inventoryStore = inject(InventoryStore);

  protected clearInventory = this.inventoryStore.clearInventory;

  protected toggleInventory(): void {
    this.inventoryStore.toggleInventory();
  }

  protected sortedIngredients = computed(() => {
    const ingredients = this.inventoryStore.ingredients();
    if (!ingredients) {
      return [];
    }
    return [...ingredients].sort((a, b) => a.name.localeCompare(b.name));
  });

  protected sortedPotions = computed(() => {
    if (!this.sortedPotions) {
      return [];
    }
    const potions = this.inventoryStore.potions();
    return [...potions].sort((a, b) => a.name.localeCompare(b.name));
  });
}

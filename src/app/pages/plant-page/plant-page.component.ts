import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getPlantById } from '../../../data/plant/plant.repository';
import { Plant } from '../../../data/plant/plant';
import { CommonModule, Location } from '@angular/common';
import { RecipeWithPlants } from '../../../data/recipe/recipe';
import {
  addPlantsToRecipes,
  getRecipes,
} from '../../../data/recipe/recipe.repository';
import { DisplayRecipesComponent } from '../../display-recipes/display-recipes.component';
import { RecipeComponent } from '../../display-recipes/recipe/recipe.component';
import { ItemComponent } from '../../display-recipes/item/item.component';
import { DialogService } from '@ngneat/dialog';
import { RarityExplanationModalComponent } from '../../rarity-explanation-modal/rarity-explanation-modal.component';
import { InventoryStore } from '../../../data/inventory/inventory.store';

@Component({
  selector: 'app-plant-page',
  imports: [
    CommonModule,
    DisplayRecipesComponent,
    RecipeComponent,
    ItemComponent,
  ],
  templateUrl: './plant-page.component.html',
  styleUrl: './plant-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantPageComponent {
  private inventoryStore = inject(InventoryStore);

  protected plant: WritableSignal<Plant | undefined> = signal(undefined);
  protected recipes: WritableSignal<RecipeWithPlants[]> = signal([]);

  constructor(private route: ActivatedRoute, private location: Location) {
    this.route.paramMap.subscribe((params) => {
      const plantId = Number(params.get('plantId'));
      const plant = getPlantById(plantId);
      this.plant.set(plant);

      this.recipes.set(
        addPlantsToRecipes(
          getRecipes().filter((recipe) =>
            recipe.ingredients.some(
              (ingredient) => ingredient.plantId === plantId
            )
          )
        )
      );
    });
  }

  goBack() {
    this.location.back();
  }

  protected openRarityExplanationModal(): void {
    const dialog = inject(DialogService);
    dialog.open(RarityExplanationModalComponent);
  }

  protected addPlant(): void {
    const plant = this.plant();
    if (plant) {
      this.inventoryStore.addPlant({ ...plant, count: 1 });
    }

    if (!this.inventoryStore.isOpen()) {
      this.inventoryStore.toggleInventory();
    }
  }

  protected removePlant(): void {
    const plant = this.plant();
    if (plant) {
      this.inventoryStore.removePlant({ ...plant, count: 1 });
    }

    if (!this.inventoryStore.isOpen()) {
      this.inventoryStore.toggleInventory();
    }
  }
}

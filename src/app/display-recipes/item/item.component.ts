import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Recipe } from '../../../data/recipe/recipe';
import { Plant } from '../../../data/plant/plant';
import { RouterModule } from '@angular/router';

type Item = {
  name: string;
  imageUrl: string;
  id?: number;
};

@Component({
  selector: 'app-item',
  imports: [NgIf, RouterModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  public item = input.required<Item>();
  public count = input<number>();

  // type guard to distinguish if item is a Plant or Recipe
  public isRecipe(item: Item): item is Recipe {
    return 'ingredient' in item;
  }

  public isPlant(item: Item): item is Plant {
    return 'biome' in item;
  }

  protected getNavLink(): string | undefined {
    const item = this.item();

    if (!item.id) {
      return undefined;
    }

    if (this.isPlant(item)) {
      return `/plants/${item.id}`;
    } else if (this.isRecipe(item)) {
      return `/recipes/${item.id}`;
    } else {
      return undefined;
    }
  }
}

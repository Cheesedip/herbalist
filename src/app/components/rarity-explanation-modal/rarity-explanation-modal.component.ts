import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ItemComponent } from '../../ui-components/item/item.component';
import { CommonModule } from '@angular/common';
import { PlantRarity } from '../../../data/ingredient/rarity';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-rarity-explanation-modal',
  imports: [ItemComponent, CommonModule],
  templateUrl: './rarity-explanation-modal.component.html',
  styleUrl: './rarity-explanation-modal.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RarityExplanationModalComponent {
  private dialogRef = inject(DialogRef<RarityExplanationModalComponent>);

  protected plantRarities = Object.values(PlantRarity);

  public closeDialog(): void {
    this.dialogRef.close();
  }

  protected rarityExplanation: Record<
    PlantRarity,
    { description: string; chance: string }
  > = {
    [PlantRarity.COMMON]: {
      description: 'Common plants are easy to find, you have a',
      chance: '40%',
    },
    [PlantRarity.UNCOMMON]: {
      description: 'Uncommon plants are a little harder to find, you have a',
      chance: '20%',
    },
    [PlantRarity.RARE]: {
      description: 'Rare plants are difficult to find, you have a',
      chance: '5%',
    },
    [PlantRarity.EPIC]: {
      description: 'Epic plants are extremely difficult to find, you have a',
      chance: '1%',
    },
  };
}

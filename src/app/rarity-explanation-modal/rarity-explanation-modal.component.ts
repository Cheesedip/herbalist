import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ItemComponent } from '../display-recipes/item/item.component';
import { CommonModule } from '@angular/common';
import { PlantRarity } from '../../data/plant/rarity';
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

  protected rarityExplanation: Record<PlantRarity, string> = {
    [PlantRarity.COMMON]:
      'Common plants are easy to find, you have a 20% chance of finding these plants',
    [PlantRarity.UNCOMMON]:
      'Uncommon plants are a little harder to find, you have a 10% chance of finding these plants',
    [PlantRarity.RARE]:
      'Rare plants are difficult to find, you have a 3% chance of finding these plants',
    [PlantRarity.EPIC]:
      'Epic plants are extremely difficult to find, you have a 1% chance of finding these plants',
  };
}

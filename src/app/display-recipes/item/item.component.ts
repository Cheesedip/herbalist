import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Recipe } from '../../../data/recipe/recipe';
import { Plant } from '../../../data/plant/plant';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  public name = input.required<string>();
  public imageUrl = input.required<string>();
  public id = input<number>();
  public count = input<number>();
  public borderColor = input<string | undefined>('#2a5d34');
  public borderSize = input<number | undefined>(2);
  public borderRadius = input<number | undefined>(6);
  public imageBorderRadius = input<number | undefined>(4);
  public navLink = input<string | undefined>(undefined);
}

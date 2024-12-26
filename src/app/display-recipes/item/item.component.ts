import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HoverTextDirective } from '../../../decorators/tooltip.deorator';
import { NgIf } from '@angular/common';

type Item = {
  name: string;
  imageUrl: string;
};

@Component({
  selector: 'app-item',
  imports: [HoverTextDirective, NgIf],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  public item = input.required<Item>();
  public count = input<number>();
}

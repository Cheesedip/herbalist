import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';

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
  public id = input<number>(); // Only provided for entities, e.g. plants and recipes
  public count = input<number>(); // Only provided for entities, e.g. plants and recipes
  public navLink = input<string | undefined>(undefined);

  // border styling
  public borderColor = input<string | undefined>('#2a5d34'); // $primary-color
  public borderWidth = input<number | undefined>(2);
  public borderRadius = input<number | undefined>(6);
  public imageBorderRadius = input<number | undefined>(4);

  // other styling
  public backgroundColor = input<string | undefined>('#fff'); // $white
  public showPointerOnHover = input<boolean>(true);

  constructor() {
    toObservable(this.backgroundColor).subscribe((backgroundColor) => {
      if (this.name() === 'Uncommon') {
        console.log('background color', backgroundColor);
      }
    });
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  activePlant$,
  setActivePlantsId,
} from '../../../data/plant/plant.repository';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-plant-page',
  imports: [],
  templateUrl: './plant-page.component.html',
  styleUrl: './plant-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantPageComponent {
  protected plant = toSignal(activePlant$);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const plantId = Number(this.route.snapshot.paramMap.get('plantId'));
    if (plantId) {
      setActivePlantsId(plantId);
    }
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Biome } from '../../data/plant/biome';
import { gather } from '../../data/plant/gather';
import { Plant } from '../../data/plant/plant';
import { CommonModule } from '@angular/common';
import { DisplayPlantsComponent } from '../display-plants/display-plants.component';
import { atLeastOneBiomeChecked } from '../../form-validators/at-least-one-biome.validator';

@Component({
  selector: 'app-gather-herbs',
  imports: [CommonModule, ReactiveFormsModule, DisplayPlantsComponent],
  templateUrl: './gather-herbs.component.html',
  styleUrl: './gather-herbs.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GatherHerbsComponent {
  protected Biome = Biome;
  protected biomes = Object.values(Biome);

  protected gatheredPlants: WritableSignal<Plant[]> = signal([]);

  protected form = new FormGroup({
    roll: new FormControl<null | number>(null, [
      Validators.required,
      Validators.min(1), // Ensures a positive number
    ]),
    biomes: new FormGroup(
      Object.values(Biome).reduce((controls, biome) => {
        controls[biome] = new FormControl(false); // Each biome starts unchecked
        return controls;
      }, {} as Record<Biome, FormControl<boolean | null>>),
      { validators: atLeastOneBiomeChecked }
    ),
  });

  protected getErrorMessage() {
    if (this.form.controls.roll.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.form.controls.roll.hasError('min')) {
      return 'The value must be a number higher than 0';
    }
    if (this.form.controls.biomes.hasError('atLeastOneBiomeChecked')) {
      return 'You must select at least one biome';
    }
    return '';
  }

  protected gatherHerbs() {
    const form = this.form.getRawValue();
    if (!form.roll) {
      return;
    }
    const gatheredPlants = gather(
      form.roll,
      this.getBiomeListFromForm(form.biomes)
    );
    console.log({ gatheredPlants });

    this.gatheredPlants.set(gatheredPlants);
  }

  private getBiomeListFromForm(formBiomes: any): Biome[] {
    return Object.values(Biome).filter((biome) => formBiomes[biome]);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  output,
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
import { CommonModule } from '@angular/common';
import { DisplayPlantsComponent } from '../display-plants/display-plants.component';
import { atLeastOneBiomeChecked } from '../../form-validators/at-least-one-biome.validator';
import { PlantWithCount } from '../../data/plant/plant';
import { BiomeSelectorComponent } from './biome-selector/biome-selector.component';
import { InventoryStore } from '../../data/inventory/inventory.store';
import { BackpackComponent } from '../ui-components/backpack/backpack.component';

@Component({
  selector: 'app-gather-herbs',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DisplayPlantsComponent,
    BiomeSelectorComponent,
  ],
  templateUrl: './gather-herbs.component.html',
  styleUrl: './gather-herbs.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GatherHerbsComponent {
  private inventoryStore = inject(InventoryStore);
  protected Biome = Biome;
  protected biomes = Object.values(Biome);

  protected gatheredPlants: WritableSignal<PlantWithCount[]> = signal([]);
  protected counts: WritableSignal<number[]> = signal([]);

  protected herbsGathered = computed(() => this.gatheredPlants().length);
  protected plantsAdded = signal(false);

  protected form = new FormGroup({
    roll: new FormControl<null | number>(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(40),
    ]),
    biomes: new FormControl(
      {
        [Biome.MEADOW]: false,
        [Biome.FOREST]: false,
        [Biome.CAVE]: false,
        [Biome.HILLS]: false,
        [Biome.MOUNTAINS]: false,
      },
      { validators: atLeastOneBiomeChecked }
    ),
  });

  constructor() {
    this.getStateFromLocalStorage();

    effect(() => {
      this.storeStateToLocalStorage();
    });
  }

  protected getErrorMessage() {
    if (this.form.controls.roll.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.form.controls.roll.hasError('min')) {
      return 'The value must be a number higher than 0';
    }
    if (this.form.controls.roll.hasError('max')) {
      return 'The value must be no higher than 40';
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
    const gatherResult = gather(
      form.roll,
      this.getBiomeListFromForm(form.biomes)
    );
    this.gatheredPlants.set(gatherResult);
  }

  protected addPlantsToInventory() {
    this.gatheredPlants().forEach((plant) => {
      this.inventoryStore.addPlant(plant);
    });

    this.plantsAdded.set(true);
    if (!this.inventoryStore.isOpen()) {
      this.inventoryStore.toggleInventory();
    }
  }

  protected reset() {
    this.form.reset({
      roll: null,
      biomes: {
        [Biome.MEADOW]: false,
        [Biome.FOREST]: false,
        [Biome.CAVE]: false,
        [Biome.HILLS]: false,
        [Biome.MOUNTAINS]: false,
      },
    });
    this.gatheredPlants.set([]);
    this.counts.set([]);
    this.plantsAdded.set(false);
  }

  private getBiomeListFromForm(formBiomes: any): Biome[] {
    return Object.values(Biome).filter((biome) => formBiomes[biome]);
  }

  private storeStateToLocalStorage() {
    localStorage.setItem(
      'gatheredPlants',
      JSON.stringify(this.gatheredPlants())
    );
    localStorage.setItem('counts', JSON.stringify(this.counts()));
    localStorage.setItem(
      'gatherHerbsForm',
      JSON.stringify(this.form.getRawValue())
    );
  }

  private getStateFromLocalStorage() {
    const storedPlants = localStorage.getItem('gatheredPlants');
    if (storedPlants) {
      this.gatheredPlants.set(JSON.parse(storedPlants));
    }

    const storedCounts = localStorage.getItem('counts');
    if (storedCounts) {
      this.counts.set(JSON.parse(storedCounts));
    }

    const storedForm = localStorage.getItem('gatherHerbsForm');
    if (storedForm) {
      this.form.patchValue(JSON.parse(storedForm));
    }
  }
}

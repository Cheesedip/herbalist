import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { addPlants, plants$ } from '../data/plant/plant.repository';
import plants from '../data/plant/plants.json'; // Ensure the path to the JSON file is correct
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { gather } from '../data/plant/gather';
import { addIds } from './helpers';
import { Biome } from '../data/plant/biome';
import { Plant } from '../data/plant/plant';
import { DisplayPlantsComponent } from './display-plants/display-plants.component';
import { toSignal } from '@angular/core/rxjs-interop';

enum TabType {
  GatherHerbs = 'Gather Herbs',
  BotanicalCompendium = 'Botanical Compendium',
  AlchemicalRecipes = 'Alchemical Recipes',
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, DisplayPlantsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected Biome = Biome;
  protected biomes = Object.values(Biome);
  protected TabType = TabType;
  protected tabs = Object.values(TabType);

  protected gatheredPlants: WritableSignal<Plant[]> = signal([]);
  protected allPlants: WritableSignal<Plant[]> = signal([]);

  protected activeTab = TabType.GatherHerbs;

  constructor() {
    const plantsWithIds = addIds(plants) as Plant[];
    addPlants(plantsWithIds);
    this.allPlants.set(plantsWithIds);
  }

  protected form = new FormGroup({
    roll: new FormControl<null | number>(null, [
      Validators.required,
      Validators.min(0), // Ensures a positive number
    ]),
    biomes: new FormGroup(
      Object.values(Biome).reduce((controls, biome) => {
        controls[biome] = new FormControl(false); // Each biome starts unchecked
        return controls;
      }, {} as Record<Biome, FormControl<boolean | null>>)
    ),
  });

  protected getErrorMessage() {
    if (this.form.controls.roll.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.form.controls.roll.hasError('min')) {
      return 'The value must be a positive number';
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

  protected setActiveTab(tab: TabType) {
    this.activeTab = tab;
    console.log(this.activeTab);
  }
}

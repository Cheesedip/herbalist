import {
  Component,
  forwardRef,
  ChangeDetectionStrategy,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Biome } from '../../../data/plant/biome';
import { ItemComponent } from '../../display-recipes/item/item.component';
import { NgFor } from '@angular/common';

export interface ItemInputs {
  imageUrl: string;
  borderSize?: number;
  borderColor?: string;
  borderRadius?: number;
  imageBorderRadius?: number;
}
@Component({
  selector: 'app-biome-selector',
  templateUrl: './biome-selector.component.html',
  styleUrls: ['./biome-selector.component.scss'],
  imports: [ItemComponent, NgFor],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BiomeSelectorComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BiomeSelectorComponent implements ControlValueAccessor {
  public biomes = Object.values(Biome) as Biome[];

  // Holds the true/false state for each biome
  public value: Record<Biome, boolean> = {
    [Biome.MEADOW]: false,
    [Biome.FOREST]: false,
    [Biome.CAVE]: false,
    [Biome.HILLS]: false,
    [Biome.MOUNTAINS]: false,
  };

  // Signal for item inputs based on biome selection
  protected itemInputs = signal<Record<Biome, ItemInputs>>({
    [Biome.MEADOW]: { imageUrl: 'assets/biomes/meadow_unselected.webp' },
    [Biome.FOREST]: { imageUrl: 'assets/biomes/forest_unselected.webp' },
    [Biome.CAVE]: { imageUrl: 'assets/biomes/cave_unselected.webp' },
    [Biome.HILLS]: { imageUrl: 'assets/biomes/hills_unselected.webp' },
    [Biome.MOUNTAINS]: { imageUrl: 'assets/biomes/mountains_unselected.webp' },
  });

  private onChange: (value: Record<Biome, boolean>) => void = () => {};
  private onTouched: () => void = () => {};

  // Toggles the selected state of a biome
  public toggleBiome(biome: Biome): void {
    this.value[biome] = !this.value[biome];
    this.updateItemInputs();
    this.onChange(this.value);
  }

  writeValue(value: Record<Biome, boolean>): void {
    if (value) {
      console.log({ value });
      this.value = value;
      this.updateItemInputs();
    }
  }

  registerOnChange(fn: (value: Record<Biome, boolean>) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private updateItemInputs(): void {
    console.log('meadow value',this.value['meadow']);
    const a = this.value['meadow'];
    const baseUrl = 'assets/biomes/';
    this.itemInputs.set(
      Object.fromEntries(
        this.biomes.map((biome) => [
          biome,
          {
            imageUrl: `${baseUrl}${biome}${
              this.value[biome] ? '' : '_unselected'
            }.webp`,
            ...(this.value[biome] && {
              borderSize: 4,
              borderColor: '#a8d5a8',
              borderRadius: 2,
              imageBorderRadius: 0,
            }),
          },
        ])
      ) as Record<Biome, ItemInputs>
    );
    console.log(this.itemInputs());
  }
}

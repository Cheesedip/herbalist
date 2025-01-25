import { AbstractControl, ValidationErrors } from '@angular/forms';

export function atLeastOneBiomeChecked(
  control: AbstractControl
): ValidationErrors | null {
  const biomes = control.value;
  const atLeastOneChecked = Object.values(biomes).some((checked) => checked);
  return atLeastOneChecked ? null : { atLeastOneBiomeChecked: true };
}

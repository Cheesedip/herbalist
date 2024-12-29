import { createStore, withProps } from '@ngneat/elf';
import {
  withEntities,
  selectAllEntities,
  setEntities,
  addEntities,
  updateEntities,
  deleteEntities,
  withUIEntities,
  withActiveId,
  selectActiveEntity,
  setActiveId,
  withActiveIds,
  selectActiveEntities,
  toggleActiveIds,
  selectEntity,
  getEntity,
} from '@ngneat/elf-entities';
import { Plant } from './plant';
import { filter, tap } from 'rxjs';

//TODO: replace this clown fiesta with rxjs signal store

export interface PlantUI {
  id: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PlantsProps {}

export const store = createStore(
  { name: 'plants' },
  withProps<PlantsProps>({}),
  withEntities<Plant>(),
  withUIEntities<PlantUI>(),
  withActiveId(),
  withActiveIds()
);

export const activePlants$ = store.pipe(selectActiveEntities());

export const activePlant$ = store.pipe(
  selectActiveEntity(),
  filter((plant) => !!plant)
);

export const plants$ = store.pipe(selectAllEntities());

export function getPlants(): Plant[] {
  return Object.values(store.getValue().entities);
}

export function setPlants(plants: Plant[]) {
  store.update(setEntities(plants));
}

export function addPlant(plant: Plant) {
  store.update(addEntities(plant));
}

export function addPlants(plants: Plant[]) {
  store.update(addEntities(plants));
}

export function updatePlant(id: Plant['id'], plant: Partial<Plant>) {
  store.update(updateEntities(id, plant));
}

export function deletePlant(id: Plant['id']) {
  store.update(deleteEntities(id));
}

export function setActivePlantsId(id: Plant['id']) {
  store.update(setActiveId(id));
}

export function toggleActivePlantsIds(ids: Array<Plant['id']>) {
  store.update(toggleActiveIds(ids));
}

export function getPlantById(id: number): Plant | undefined {
  return store.getValue().entities[id];
}

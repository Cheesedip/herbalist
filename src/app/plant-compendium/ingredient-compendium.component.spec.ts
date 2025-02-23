import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientCompendiumComponent } from './ingredient-compendium.component';

describe('PlantCompendiumComponent', () => {
  let component: IngredientCompendiumComponent;
  let fixture: ComponentFixture<IngredientCompendiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientCompendiumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientCompendiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

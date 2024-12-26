import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantCompendiumComponent } from './plant-compendium.component';

describe('PlantCompendiumComponent', () => {
  let component: PlantCompendiumComponent;
  let fixture: ComponentFixture<PlantCompendiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantCompendiumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantCompendiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

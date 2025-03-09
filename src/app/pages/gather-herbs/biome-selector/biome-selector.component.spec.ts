import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomeSelectorComponent } from './biome-selector.component';

describe('BiomeSelectorComponent', () => {
  let component: BiomeSelectorComponent;
  let fixture: ComponentFixture<BiomeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiomeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiomeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

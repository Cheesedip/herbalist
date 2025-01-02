import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RarityExplanationModalComponent } from './rarity-explanation-modal.component';

describe('RarityExplanationModalComponent', () => {
  let component: RarityExplanationModalComponent;
  let fixture: ComponentFixture<RarityExplanationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RarityExplanationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RarityExplanationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatherHerbsComponent } from './gather-herbs.component';

describe('GatherHerbsComponent', () => {
  let component: GatherHerbsComponent;
  let fixture: ComponentFixture<GatherHerbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GatherHerbsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatherHerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcoctionCatalogComponent } from './concoction-catalog.component';

describe('ConcoctionCatalogComponent', () => {
  let component: ConcoctionCatalogComponent;
  let fixture: ComponentFixture<ConcoctionCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcoctionCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcoctionCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAssetsComponent } from './saved-assets.component';

describe('SavedAssetsComponent', () => {
  let component: SavedAssetsComponent;
  let fixture: ComponentFixture<SavedAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedAssetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

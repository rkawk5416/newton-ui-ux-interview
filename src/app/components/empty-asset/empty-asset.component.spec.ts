import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyAssetComponent } from './empty-asset.component';

describe('EmptyAssetComponent', () => {
  let component: EmptyAssetComponent;
  let fixture: ComponentFixture<EmptyAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyAssetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

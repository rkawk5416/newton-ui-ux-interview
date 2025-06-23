import { Component, OnInit } from '@angular/core';
import { Asset } from '../../models/asset.model';
import { AssetService } from '../../services/asset.service';
import { CommonModule } from '@angular/common';
import { EmptyAssetComponent } from '../empty-asset/empty-asset.component';
import { SavedAssetsComponent } from '../saved-assets/saved-assets.component';
import { AssetModalComponent } from '../asset-modal/asset-modal.component';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, EmptyAssetComponent, SavedAssetsComponent, AssetModalComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  assets: Asset[] = [];
  totalValue = 0;
  showModal = false;

  constructor(private assetService: AssetService){

  }
  ngOnInit(): void {
      this.assetService.assets$.subscribe((assetData) => {
        this.assets = assetData;

        this.totalValue = this.assets.reduce((acc, curr) => acc + (curr.value ?? 0), 0);

      })
  }

  openModal(): void {
    this.showModal = true;
    console.log('this.showModal', this.showModal)
  }
  closeModal(): void {
    this.showModal = false;
  }

  saveAssets(newAssets: Asset[]){
    const updatedAssets = [...this.assets, ...newAssets];
    this.assetService.updateAssets(updatedAssets);
    this.closeModal();
  }
  removeAsset(index: number): void {
    const updatedAssets = [...this.assets];
    updatedAssets.splice(index,1);
    this.assetService.updateAssets(updatedAssets);
  }

  calculateTotalValue(): number{
     return this.assets.reduce((total, asset) => total + (asset.value ||0), 0);
  }
}

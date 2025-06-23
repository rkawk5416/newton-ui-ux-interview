import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Asset } from '../../models/asset.model';



@Component({
  selector: 'app-saved-assets',
  imports: [CommonModule],
  templateUrl: './saved-assets.component.html',
  styleUrl: './saved-assets.component.scss'
})
export class SavedAssetsComponent {

  @Input() assets: Asset[] =[];
  @Input() totalValue: number = 0;
  @Output() addAsset = new EventEmitter<void>();
  @Output() removeAsset = new EventEmitter<number>();

}

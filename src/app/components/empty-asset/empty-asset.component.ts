import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Asset } from '../../models/asset.model';

@Component({
  selector: 'app-empty-asset',
  imports: [CommonModule],
  templateUrl: './empty-asset.component.html',
  styleUrl: './empty-asset.component.scss'
})
export class EmptyAssetComponent {
  @Output() addAsset = new EventEmitter<void>();
  
}

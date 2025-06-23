import { Component, EventEmitter, Output } from '@angular/core';
import { Asset } from '../../models/asset.model';
import { AssetService } from '../../services/asset.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asset-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './asset-modal.component.html',
  styleUrl: './asset-modal.component.scss'
})
export class AssetModalComponent {
  @Output() close = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<Asset[]>();

  assetTypes = ['Gift', 'Savings', 'RRSP', 'Other'];

  assetRows: Asset[] = [{type:'', value: null, isInvalid: false}];

  constructor(){}

  addRow() {
    this.assetRows.push({type:'',value: null});
  }
  deleteRow(i: number){
    if (this.assetRows.length >1){
      this.assetRows.splice(i,1);
    }
  }
  onClose(){
    this.close.emit(true);

  }
  onSave(){
    if (this.isFormValid()){
      this.save.emit(this.assetRows);
    }
  }
  isFormValid(): boolean {
    return this.assetRows.every(row => row.type && row.value !== null);

  }
  formatVal(row: {type: string; value: number | null}): void{
    if (row.value !== null){
      row.value = parseFloat(row.value.toFixed(2));
    }
  }
  validateValue(row:{type: string; value: number | null, isInvalid?: boolean}): void {
    if (row.value !== null && row.value <= 0) {
      row.isInvalid = true;
      row.value = null;
    }
    else{
      row.isInvalid = false;
    }
  }

  handleBlur(row: {type: string; value: number | null}): void {
    this.formatVal(row);
    this.validateValue(row);
  }




}

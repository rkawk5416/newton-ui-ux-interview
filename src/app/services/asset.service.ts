import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Asset } from '../models/asset.model';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private assetsSujbect = new BehaviorSubject<Asset[]>([]);
  assets$ = this.assetsSujbect.asObservable();

  constructor() { }

  updateAssets(assets: Asset[]){
    this.assetsSujbect.next(assets);
  }

}

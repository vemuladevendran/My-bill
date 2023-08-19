import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  imagesList = [
    'biryani',
    'dosa',
    'egg-dosa',
    'idlly',
    'kal-dosa',
    'meal',
    'puri',
    'vada',
    'chapati',
    'egg',
    'off-boil',
    'omelette',
    'pongal',
  ];
  constructor() {}

  getImageFilenames(): any {
    return this.imagesList;
  }
}

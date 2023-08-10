import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getImageFilenames(): Promise<any> {
    return lastValueFrom(this.http.get<string[]>('assets/items'));
  }
}

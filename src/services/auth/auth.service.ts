import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_KEY = 'AUTH_DETAILS';

  constructor(private storage: Storage) {}

  async createStore(data: any): Promise<void> {
    try {
      await this.storage.set(this.AUTH_KEY, data);
    } catch (error) {
      console.log(error, 'Fail to create store');
    }
  }

  async getStoreDetails(): Promise<any> {
    try {
      const data = await this.storage.get(this.AUTH_KEY);
      return data;
    } catch (error) {
      console.log(error, 'Fail to retrieve data');
    }
  }

  async isLoggedIn() {
    return !! await this.getStoreDetails();
  }
}

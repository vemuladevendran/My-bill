import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  CART_KEY = 'CART_DETAILS';
  constructor(private storage: Storage) {}

  async addCartItems(data: any): Promise<any> {
    try {
      const itemsList = (await this.getCartItems()) as any;
      if (itemsList === null) {
        await this.storage.set(this.CART_KEY, [data]);
        return;
      }
      itemsList.push(data);
      await this.storage.set(this.CART_KEY, itemsList);
    } catch (error) {
      console.log(error, 'Fail to store data in device');
    }
  }

  async getCartItems(): Promise<any> {
    try {
      const data = await this.storage.get(this.CART_KEY);
      return data;
    } catch (error) {
      console.log(error, 'Fail to retrieve data');
    }
  }

  async removeCartItems(item: any): Promise<void> {
    try {
      const cartItems = (await this.getCartItems()) as any;

      const index = cartItems.findIndex(
        (cartItem: { itemName: any }) => cartItem.itemName === item.itemName
      );
      if (index !== -1) {
        cartItems.splice(index, 1);
      }
      await this.storage.set(this.CART_KEY, cartItems);
    } catch (error) {}
  }
}

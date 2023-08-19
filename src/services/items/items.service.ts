import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  ITEMS = 'ITEMS_DATA';

  constructor(private storage: Storage) {}

  async createNewItem(data: any): Promise<any> {
    try {
      const itemsList = (await this.getItemsData()) as any;
      if (itemsList === null) {
        await this.storage.set(this.ITEMS, [data]);
        return;
      }
      itemsList.push(data);
      await this.storage.set(this.ITEMS, itemsList);
    } catch (error) {
      console.log(error, 'Fail to store data in device');
    }
  }

  async getItemsData(): Promise<any> {
    try {
      const data = await this.storage.get(this.ITEMS);
      return data;
    } catch (error) {
      console.log(error, 'Fail to retrieve data');
    }
  }

  async deleteItem(item: any): Promise<any> {
    try {
      const itemsList = (await this.getItemsData()) as any;

      const index = itemsList.findIndex(
        (cartItem: { itemName: any }) => cartItem.itemName === item.itemName
      );
      if (index !== -1) {
        itemsList.splice(index, 1);
      }
      await this.storage.set(this.ITEMS, itemsList);
    } catch (error) {
      console.log(error, 'Fail to Delete Item data');
    }
  }

  async updateOrder(data: any): Promise<void> {
    try {
      await this.storage.set(this.ITEMS, data);
    } catch (error) {
      console.log(error, 'Fail to update order');
    }
  }
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  ORDERS_KEY = 'ORDERS_DETAILS';
  constructor(private storage: Storage) {}

  //  create order
  async createOrder(data: any): Promise<any> {
    try {
      const orderList = (await this.getOrderDetails()) as any;
      if (orderList === null) {
        await this.storage.set(this.ORDERS_KEY, [data]);
        return;
      }
      orderList.push(data);
      await this.storage.set(this.ORDERS_KEY, orderList);
    } catch (error) {
      console.log(error, 'Fail to store data in device');
    }
  }

  // get order details
  async getOrderDetails(): Promise<any> {
    try {
      const data = await this.storage.get(this.ORDERS_KEY);
      return data;
    } catch (error) {
      console.log(error, 'Fail to retrieve data');
    }
  }
}

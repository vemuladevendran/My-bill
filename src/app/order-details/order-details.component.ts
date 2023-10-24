import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersService } from 'src/services/orders/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class OrderDetailsComponent  implements OnInit {

  orderDetails:any[] = [];
  constructor(
    private orderServe: OrdersService,
  ) { }



  // get order details
  async getOrderDetails(): Promise<void>{
    try {
      this.orderDetails = await this.orderServe.getOrderDetails();
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    this.getOrderDetails();
  }

}

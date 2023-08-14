import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartCardPage } from '../items/cart-card/cart-card.page';
import { CartService } from 'src/services/cart/cart.service';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.page.html',
  styleUrls: ['./current-order.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CartCardPage],
})
export class CurrentOrderPage implements OnInit {
  cartItems:any[] = [];
  constructor(private cartServe: CartService) {}

  // get cart list

  async getCartList(): Promise<void> {
    try {
      this.cartItems = (await this.cartServe.getCartItems()) || [];
    } catch (error) {
      console.log(error, 'Fail to fetch cart items');
    }
  }

  ngOnInit() {
    this.getCartList();
  }
}

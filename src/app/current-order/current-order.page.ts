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
  cartItems: any[] = [];
  totalPrice = 0;

  constructor(private cartServe: CartService) {}

  // get cart list

  async getCartList(): Promise<void> {
    try {
      this.cartItems = (await this.cartServe.getCartItems()) || [];
      this.calculateTotalPrice();
    } catch (error) {
      console.log(error, 'Fail to fetch cart items');
    }
  }

  // increase item count
  async increaseCount(itemName: string): Promise<void> {
    try {
      const data = this.cartItems;
      const item = data.find((c) => c.itemName === itemName);
      if (item) {
        item.count++;
      }
      await this.cartServe.updateCartCount(data);
      this.getCartList();
    } catch (error) {
      console.log(error);
    }
  }

  // decrease item count
  async decreaseCount(itemName: string): Promise<void> {
    try {
      const data = this.cartItems;
      const item = data.find((c) => c.itemName === itemName);
      if (item && item.count > 1) {
        item.count--;
      }
      await this.cartServe.updateCartCount(data);
      this.getCartList();
    } catch (error) {
      console.log(error);
    }
  }

  // total price calculation
  calculateTotalPrice(): void {
    let total = 0;
    for (const item of this.cartItems) {
      total += item.itemPrice * item.count;
    }
    this.totalPrice = total;
  }

  ngOnInit() {
    this.getCartList();
  }
}

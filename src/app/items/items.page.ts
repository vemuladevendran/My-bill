import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FiltersPage } from '../common-components/filters/filters.page';
import { ItemCardPage } from '../common-components/item-card/item-card.page';
import { CartCardPage } from './cart-card/cart-card.page';
import { RouterLink } from '@angular/router';
import { ItemsService } from 'src/services/items/items.service';
import { CartService } from 'src/services/cart/cart.service';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    CommonModule,
    FormsModule,
    FiltersPage,
    ItemCardPage,
    CartCardPage,
  ],
})
export class ItemsPage implements OnInit {
  itemsList: any[] = [];
  cartCount: any[] = [];
  storeDetails:any;
  
  constructor(
    private itemsServe: ItemsService,
    private cartServe: CartService,
    private authServe: AuthService,
  ) {}

  // get store items list
  async getItems(): Promise<void> {
    try {
      this.itemsList = await this.itemsServe.getItemsData();
    } catch (error) {
      console.log(error, 'Fail to get items');
    }
  }

  // add item to cart

  async addToCart(item: any): Promise<void> {
    try {
      const data = item;
      data['count'] = 1;
      await this.cartServe.addCartItems(data);
      this.getCartList();
    } catch (error) {
      console.log(error, 'Fail');
    }
  }

  // remove item from cart
  async removeItemFromCart(item: any) {
    try {
      await this.cartServe.removeCartItems(item);
      this.getCartList();
    } catch (error) {
      console.log('Fail', error);
    }
  }

  isItemInCart(item: any): boolean {
    return this.cartCount.some((x) => x.itemName === item.itemName);
  }

  // get cart list

  async getCartList(): Promise<void> {
    try {
      this.cartCount = (await this.cartServe.getCartItems()) || [];
    } catch (error) {
      console.log(error, 'Fail to fetch cart items');
    }
  }

  // clear all the cart items
  async clearAllCartItems(): Promise<void> {
    try {
      await this.cartServe.clearCartItems();
      this.getCartList();
    } catch (error) {
      console.log(error, 'Fail to remove all cart items');
    }
  }


  async getStoreDetails(): Promise<void>{
    try {
      this.storeDetails = await this.authServe.getStoreDetails();
    } catch (error) {
      console.log(error);
      
    }
  }

  async isLoggedIn() {
    return this.authServe.isLoggedIn();
   }

  ngOnInit() {
    this.getStoreDetails();
    this.getItems();
    this.getCartList();
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.page.html',
  styleUrls: ['./item-card.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ItemCardPage implements OnInit {
  @Input() itemsData: any;
  @Input() isItemInCart: any;
  @Output() cartItem = new EventEmitter<any>();
  @Output() removeCartItem = new EventEmitter<any>();
  cartItemsList: any[] = [];

  constructor() {}

  addItemToCart(item: any) {
    this.cartItem.emit(item);
  }


  removeItemFromCart(item: any){
    this.removeCartItem.emit(item);
  }

  ngOnInit() {}
}

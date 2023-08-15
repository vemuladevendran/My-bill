import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.page.html',
  styleUrls: ['./cart-card.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class CartCardPage implements OnInit {
  @Input() cartItems: any[] = [];
  @Output() clearCartItems = new EventEmitter<any>();
  constructor() {}

  removeAllCartItems() {
    this.clearCartItems.emit(true);
  }

  ngOnInit() {}
}

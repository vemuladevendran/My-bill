import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartCardPage } from "../items/cart-card/cart-card.page";

@Component({
    selector: 'app-current-order',
    templateUrl: './current-order.page.html',
    styleUrls: ['./current-order.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, CartCardPage]
})
export class CurrentOrderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

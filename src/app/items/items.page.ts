import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FiltersPage } from "../common-components/filters/filters.page";
import { ItemCardPage } from "../common-components/item-card/item-card.page";
import { CartCardPage } from "./cart-card/cart-card.page";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-items',
    templateUrl: './items.page.html',
    styleUrls: ['./items.page.scss'],
    standalone: true,
    imports: [IonicModule,RouterLink, CommonModule, FormsModule, FiltersPage, ItemCardPage, CartCardPage]
})
export class ItemsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

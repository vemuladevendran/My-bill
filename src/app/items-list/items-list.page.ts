import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemsService } from 'src/services/items/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ItemsListPage implements OnInit {
  itemsList: any[] = [];
  constructor(private itemsServe: ItemsService) {}

  // get store items list
  async getItems(): Promise<void> {
    try {
      this.itemsList = await this.itemsServe.getItemsData();
    } catch (error) {
      console.log(error, 'Fail to get items');
    }
  }

  // delete item
  async deleteItem(item: any): Promise<void> {
    try {
      const result = window.confirm('Are sure you want to delete');
      if (result) {
        await this.itemsServe.deleteItem(item);
        this.getItems();
      }
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    this.getItems();
  }
}

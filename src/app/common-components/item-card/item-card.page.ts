import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.page.html',
  styleUrls: ['./item-card.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ItemCardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

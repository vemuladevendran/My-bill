import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FiltersPage implements OnInit {

  filterValues = ['All', 'Apple', 'Rice', 'Dinner Items', 'Pizza', 'Idlly']


  constructor() { }

  ngOnInit() {
  }

}

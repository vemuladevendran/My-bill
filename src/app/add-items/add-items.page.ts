import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ImageService } from 'src/services/image/image.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.page.html',
  styleUrls: ['./add-items.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class AddItemsPage implements OnInit {

  constructor(
    private imageServe: ImageService,
  ) { }



  async getImages(): Promise<void>{
    try {
      const data = await this.imageServe.getImageFilenames();
      console.log(data, '------------------');
      
    } catch (error) {
      console.log(error);
      
    }
  }

  ngOnInit() {
    this.getImages();
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { ImageService } from 'src/services/image/image.service';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';
import { ItemsService } from 'src/services/items/items.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.page.html',
  styleUrls: ['./add-items.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  providers: [ImageService],
})
export class AddItemsPage implements OnInit {
  imageModal: Modal | undefined;
  selectedImg = '';
  imageNamesList: any[] = [];
  addItemForm: FormGroup;
  constructor(
    private imageServe: ImageService,
    private fb: FormBuilder,
    private itemServe: ItemsService,
    private router: Router,
  ) {
    this.addItemForm = this.fb.group({
      itemName: ['', Validators.required],
      itemPrice: ['', Validators.required],
      itemCategory: [''],
      itemImage: [''],
    });
  }

  async getImages(): Promise<void> {
    try {
      this.imageNamesList = await this.imageServe.getImageFilenames();
    } catch (error) {
      console.log(error);
    }
  }

  // image selection model
  openModel() {
    this.getImages();
    this.imageModal = new bootstrap.Modal(
      document.getElementById('itemsModal') as any,
      { keyboard: false }
    );
    this.imageModal?.show();
  }

  closeModel() {
    this.imageModal?.hide();
  }

  // select item image
  selectItemImage(path: string) {
    this.addItemForm?.patchValue({ itemImage: path });
    this.selectedImg = path;
    this.closeModel();
  }

  removeSelectedImage() {
    this.selectedImg = '';
  }

  // create new item
  async createItem(): Promise<void> {
    try {
      await this.itemServe.createNewItem(this.addItemForm.value);
      this.router.navigate(['/items']);
    } catch (error) {
      console.log(error, 'Fail to store data');
    }
  }

  ngOnInit() {
  }
}

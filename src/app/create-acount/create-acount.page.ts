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
import { AuthService } from 'src/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.page.html',
  styleUrls: ['./create-acount.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class CreateAcountPage implements OnInit {
  createStoreForm: FormGroup;
  constructor(
    private authServe: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createStoreForm = this.fb.group({
      storeName: ['', [Validators.required]],
      storeNumber: ['', [Validators.required]],
      storeAddress: ['', [Validators.required]],
    });
  }

  async createStore(): Promise<void> {
    try {
      await this.authServe.createStore(this.createStoreForm.value);
      this.router.navigate(['/items']);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {}
}

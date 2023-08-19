import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/services/auth/auth.service';
import { CommonModule } from '@angular/common';
const { App } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class AppComponent implements OnInit {
  storeDetails: any;
  login = false;
  constructor(
    private storage: Storage,
    private menuCtrl: MenuController,
    private authServe: AuthService
  ) {}

  ngOnInit() {
    this.init();
    this.getStoreDetails();
    this.isLoggin();
    StatusBar.setBackgroundColor({ color: '#839EC8AD' });
    this.setupBackButton();
  }

  async init(): Promise<void> {
    try {
      this.storage = await this.storage.create();
    } catch (error) {
      console.log(error, 'Fail to initialize DB');
    }
  }

  async getStoreDetails(): Promise<void>{
    try {
      this.storeDetails = await this.authServe.getStoreDetails();
    } catch (error) {
      console.log(error);
      
    }
  }

  private setupBackButton() {
    App['addListener']('backButton', (canGoBack: any) => {
      console.log(canGoBack);
      if (canGoBack) {
        window.history.back();
      } else {
        App['exitApp']();
      }
    });
  }

  openMenu() {
    this.menuCtrl.open('main-content');
  }

  closeMenu() {
    this.menuCtrl.close('main-content');
  }

  async isLoggin() {
    this.login = await this.authServe.isLoggedIn();
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';
import { Storage } from '@ionic/storage-angular';
const { App } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class AppComponent implements OnInit {
  constructor(
    private storage: Storage,
  ) {}



  ngOnInit() {
    this.init();
    // StatusBar.setBackgroundColor({color:'#839EC8AD'})
    // this.setupBackButton();
  }

  async init(): Promise<void>{
    try {
      this.storage = await this.storage.create();
    } catch (error) {
      console.log(error, 'Fail to initialize DB');
      
    }
  }


  private setupBackButton() {
    App['addListener']('backButton', (canGoBack: any) => {
      console.log(canGoBack);
       if(canGoBack){
        window.history.back();
        } else {
         App['exitApp']();
        }
      });
  }
}

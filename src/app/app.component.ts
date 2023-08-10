import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';
import { HttpClientModule } from '@angular/common/http';
const { App } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, HttpClientModule],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    StatusBar.setBackgroundColor({color:'#839EC8AD'})
    this.setupBackButton();
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

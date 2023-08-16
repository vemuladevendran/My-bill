import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class BarcodeScannerPage implements OnInit, OnDestroy {
  scannerDetails = '';
  constructor() {}

  async startScan(): Promise<any> {
    try {
      // Check camera permission
      // This is just a simple example, check out the better checks below
      const status = await BarcodeScanner.checkPermission({ force: true });
      BarcodeScanner.hideBackground();
      if (status.denied) {
        // user denied permission
        const c = confirm(
          'We need your permission to use your camera to be able to scan barcodes'
        );
        if (c) {
          await BarcodeScanner.openAppSettings();
        }
      }
      const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

      // if the result has content
      if (result.hasContent) {
        this.scannerDetails = result.content;
        console.log(result.content); // log the raw scanned content
      }
    } catch (error) {
      console.log(error);
    }
  }

  async stopScan(): Promise<any> {
    try {
      await BarcodeScanner.stopScan();
    } catch (error) {
      console.log(error, 'Fail to stop scanner');
    }
  }

  ngOnInit() {
    this.startScan();
  }

  ngOnDestroy() {
    this.stopScan();
  }
}

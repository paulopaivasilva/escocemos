import { Component, enableProdMode } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    defineCustomElements(window)
    if(environment.production) {
      enableProdMode()
    }
  }
}

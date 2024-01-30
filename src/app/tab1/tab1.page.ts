import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public photoService: PhotoService) {}
  public code: String = "";
  public errorText: String = "";

  takePhotoToClock() {
    this.errorText = "";
    if (this.code != "" && this.code.length == 4 && this.code === "1103") {
      this.photoService.photos = [];
      this.photoService.addNewToGallery();
      this.code = "";
    } else if (this.code != "1103" && this.code.length == 4) {
      this.errorText = "Código incorreto";
    } else if (this.code.length != 4) {
      this.errorText = "São necessários 4 dígitos";
    } else if (this.code == '') {
      this.errorText = "O código não pode ficar em branco";
    }
  }

  writeCode(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.code = target.value;
    this.errorText = ""
  }

}

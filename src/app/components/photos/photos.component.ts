import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  toFile;

  picList: string[]= []

  constructor(private uploadImageService: UploadImageService) { }

  onChange(event) {
    this.toFile = event.target.files;
  }

  submit() {
    const file = this.toFile.item(0);
    this.uploadImageService.fileUpload(file)
      .then(() => {
        this.setPicList()
      })
      .catch(console.error)
  }

  setPicList() {
    this.uploadImageService.getImageNames()
      .then((imageNames: string[])=> {
        this.picList = imageNames;
      })
      .catch(err => {
        // Handle
      });
  }

  ngOnInit(): void {
    this.setPicList();
  }

}

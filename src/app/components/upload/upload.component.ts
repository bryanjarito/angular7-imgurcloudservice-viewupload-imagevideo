import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  
  private imageFile: File;

  constructor(
    private imageService: ImageService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() { }

  imageInputChange(imageInput:any){
    this.imageFile = imageInput.files[0];
  }

  async addImage(){
    this.spinner.show();
    let fileType = this.imageFile.type.split("/")[1];

    if(fileType == 'jpg' || fileType == 'jpeg' || fileType == 'mp4') {
      await this.imageService.uploadImage(this.imageFile);
      this.spinner.hide();
    } else {
      alert("Invalid file format! Only accepts \".jpg\", \".jpeg\", \".mp4\".")
    }
  } 
}
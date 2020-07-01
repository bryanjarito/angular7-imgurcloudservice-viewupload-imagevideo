import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageService } from '../../services/image.service';
import { environment } from '../../../environments/environment';

const UploadURL = environment.uploadFileUrl;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  
  private imageFile: File;

  constructor(
    private imageService: ImageService
  ) {}

  ngOnInit() { }

  imageInputChange(imageInput:any){
    this.imageFile = imageInput.files[0];
  }

  addImage(){
    let fileType = this.imageFile.type.split("/")[1];
    if(fileType == 'jpg' || fileType == 'jpeg' || fileType == 'mp4') {
      this.imageService.uploadImage(this.imageFile);
    } else {
      alert("Invalid file format! Only accepts \".jpg\", \".jpeg\", \".mp4\".")
    }
  } 
}
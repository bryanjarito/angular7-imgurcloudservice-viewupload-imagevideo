import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SharedService } from './shared.service';
import { environment } from '../../environments/environment';
 
 
interface ImageInfo{
  link:string;
}
 
@Injectable({
  providedIn: 'root'
})
 
export class ImageService {
  private images:object[] = [];
  private url: string = environment.uploadFileUrl;
  imageLink:any;
 
 
  constructor(
    private http:HttpClient,
    private sharedService: SharedService) { }
  
  async uploadImage(imageFile:File){
    let formData = new FormData();
    let fileType = imageFile.type.split("/")[0];
    formData.append(fileType, imageFile, imageFile.name);
 
    let header = new HttpHeaders({
      "Authorization": environment.bearer
    });
   
    const imageData = await this.http.post(this.url, formData, {headers:header}).toPromise();
    console.log(imageData)
    alert("File successfully uploaded!")
    this.sharedService.refreshFileList();
    this.imageLink = imageData['data'].link;
 
    let newImageObject:ImageInfo = {
      link:this.imageLink
    };
 
    this.images.unshift(newImageObject);
 
  }
}
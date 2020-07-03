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
  imageLink:any;
 
 
  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { }
  
  async uploadImage(imageFile:File){
    let formData = new FormData();
    let fileType = imageFile.type.split("/")[0];

    if(imageFile.size > 10172149) {
      alert("File is over the size limit 200MB.")
    } else  {
      formData.append(fileType, imageFile, imageFile.name);
  
      let header = new HttpHeaders({
        "Authorization": environment.bearer
      });
    
      const imageData = await this.http.post(environment.uploadFileUrl, formData, {headers:header}).toPromise();

      if(imageFile.type == "video/mp4") {
        await setTimeout( () => {
          this.sharedService.refreshFileList()
        }, 6000);
      } else {
        this.sharedService.refreshFileList()
      }

      alert("File successfully uploaded!")
    }
  }
}
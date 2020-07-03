import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VgMedia } from 'videogular2/compiled/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from '../../../../environments/environment';

import CryptoJS from 'crypto-js';

const getFileUrl: string = environment.getFileUrl;
const headers = new HttpHeaders({'Authorization': environment.bearer});

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  
  @ViewChild(VgMedia) vgMedia: VgMedia;

  file: any;
  fileId: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let fileId = params['params']
      var word = CryptoJS.enc.Base64.parse(fileId.id);
      this.fileId = CryptoJS.enc.Utf8.stringify(word);
    });

    this.getData();
  }

  async getData() {
    this.spinner.show();
    await this.restItemsServiceGetRestItems()
    .subscribe(
      restItems => {
        this.file = restItems['data']
        this.spinner.hide();
      })
  }

  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(getFileUrl + this.fileId, {
        headers: headers
      })
      .pipe(map(data => data));
  }

  backward(sec){
    this.vgMedia.seekTime(this.vgMedia.currentTime-sec)
  }

  forward(sec){
    this.vgMedia.seekTime(this.vgMedia.currentTime+sec)
  }

}

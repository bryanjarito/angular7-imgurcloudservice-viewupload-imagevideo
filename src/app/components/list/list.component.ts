import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { map } from 'rxjs/operators';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

import CryptoJS from 'crypto-js';

const getFilesUrl = environment.getFilesUrl;
const headers = new HttpHeaders({'Authorization': environment.bearer});

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  clickEventsubscription:Subscription;
  files: any;
  newAdded: any;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private data: DataService,
    private sharedService:SharedService
  ) { }

  ngOnInit() {

    this.data.currentResult.subscribe(result => { 
      this.newAdded = result
      this.getListOfFile();
    })

    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(()=>{
      this.getListOfFile();
    })
  }

  getListOfFile() {
    this.restItemsServiceGetRestItems()
    .subscribe(
      restItems => {
        this.files = restItems['data'];
      }
    )
  }

  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(getFilesUrl, {
        headers: headers
      })
      .pipe(map(data => data));
  }

  preview(id) {
    var word = CryptoJS.enc.Utf8.parse(id); 
    var base64 = CryptoJS.enc.Base64.stringify(word);
    this.router.navigate([ '/preview', base64])
  }
}

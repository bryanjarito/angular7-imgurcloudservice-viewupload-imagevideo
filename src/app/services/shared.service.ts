import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  private subject = new Subject<any>();
  
  refreshFileList() {
    this.subject.next();
  }

  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }
  
}
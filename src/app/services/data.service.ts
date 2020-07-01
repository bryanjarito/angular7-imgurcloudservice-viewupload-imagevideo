import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private dataSource = new BehaviorSubject({});
  currentResult = this.dataSource.asObservable();

  constructor() { }

  changeResult(data: object) {
    this.dataSource.next(data)
  }

}
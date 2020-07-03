import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../services/data.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: DataService;
  let http: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
       ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [DataService]
    })
    .compileComponents();

    service = TestBed.get(DataService);
    http = TestBed.get(HttpClientTestingModule)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('service should be working', () => {
    expect(http).toBeTruthy();
  });

  it('httpclient should be working', () => {
    expect(service).toBeTruthy();
  });

  it('call service from getListOfFile method', () => {
    spyOn(component, 'getListOfFile');
    expect(component.restItemsServiceGetRestItems).toHaveBeenCalled
  });
});

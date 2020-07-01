import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {VgCoreModule} from 'videogular2/compiled/core';
import {VgControlsModule} from 'videogular2/compiled/controls';
import {VgOverlayPlayModule} from 'videogular2/compiled/overlay-play';
import {VgBufferingModule} from 'videogular2/compiled/buffering';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './components/pages/preview/preview.component';
import { ListComponent } from './components/list/list.component';
import { UploadComponent } from './components/upload/upload.component';
import { HeaderComponent } from './components/header/header.component';

import { FileSelectDirective } from 'ng2-file-upload';
import { HomeComponent } from './components/pages/home/home.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    ListComponent,
    UploadComponent,
    HeaderComponent,
    FileSelectDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

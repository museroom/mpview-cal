// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';
// import 'node_modules/angular-calendar/dist/css/angular-calendar.css';
// import 'bootstrap/dist/css/bootstrap.css';
import '../scss/angular-calendar.scss';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CatComponent} from './cat/cat.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule} from 'angular-calendar';
import { PlaylistComponent } from './playlist/playlist.component';
import {PlaylistService} from './playlist.service';
import {TimelineService} from './timeline.service';
import {AppConfig} from './config.service';
import {Http, HttpModule} from '@angular/http';
import {PlaylistModule} from "./playlist/playlist.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CatComponent,
    PlaylistComponent,
  ],
  providers: [
    PlaylistService,
    TimelineService,
    AppConfig
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    CalendarModule.forRoot(),
    PlaylistModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

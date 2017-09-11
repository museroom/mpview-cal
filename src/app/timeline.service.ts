import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Timeline } from './playlist/timeline';
import { AppConfig } from './config.service';

@Injectable()
export class TimelineService  {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private timelineUrl = this.config.getServer() + 'api/v1/playlist/timeline';

  constructor(private http: Http,
              private config: AppConfig) {}

  getTimelines(): Promise<Timeline[]> {
    console.log( `timelineUrl=${this.timelineUrl}`);
    return this.http
      .get(this.timelineUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getTimeline(): Promise<Timeline> {
    return this.http
      .get(this.timelineUrl)
      .toPromise()
      .then(response => response.json().data as Timeline)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

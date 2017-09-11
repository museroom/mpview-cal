import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../playlist.service';
import {TimelineService} from '../timeline.service';
import {Timeline} from './timeline';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  timelines: Timeline[];

  constructor(
    private plService: PlaylistService,
    private timelineService: TimelineService
  ) { }

  ngOnInit() {
    this.timelineService.getTimelines()
      .then(timelines => this.timelines = timelines );
  }

}

import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from "../video";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  public SelectVideo = new EventEmitter();

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

  ngOnInit() {
  }

}

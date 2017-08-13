import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  inputs: ['video'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent'],
})
export class VideoDetailsComponent implements OnInit {
  video: any;

  constructor() { }

  private editTitle: boolean = false;

  private updateVideoEvent = new EventEmitter();

  private deleteVideoEvent = new EventEmitter();

  onTitleClick() {
    this.editTitle = true;
  }

  ngOnChanges() {
    this.editTitle = false;
  }
  ngOnInit() {
  }

  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }
  deleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }

}

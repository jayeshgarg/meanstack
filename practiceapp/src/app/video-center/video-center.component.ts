import { Component, OnInit } from '@angular/core';
import { Video } from "../video";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Video[] = [
    { "_id": "1", "title": "title1", "description": "description1", "url": "url1" },
    { "_id": "2", "title": "title2", "description": "description2", "url": "url2" },
    { "_id": "3", "title": "title3", "description": "description3", "url": "url3" },
    { "_id": "4", "title": "title4", "description": "description4", "url": "url4" }
  ];

  selectedVideo: Video;

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

  constructor() { }

  ngOnInit() {
  }

}

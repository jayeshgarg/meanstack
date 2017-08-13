import { Component, OnInit } from '@angular/core';
import { Video } from "../video";
import { VideoService } from "../video.service";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  videos: Array<Video>;

  private hideNewVideo: boolean = true;

  selectedVideo: Video;

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    this.hideNewVideo = true;
    console.log(this.selectedVideo);
  }

  newVideo() {
    this.hideNewVideo = false;
  }

  onSubmitNewVideo(video: Video) {
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);//this will help to update the UI with the just add video
        this.selectedVideo = resNewVideo;//this will auto select the video that was just inserted
        this.hideNewVideo = true;//close add box right after successful add
      });
  };

  onUpdateVideoEvent(video: Video) {
    this._videoService.updateVideo(video)
      .subscribe(resUpdatedVideo => video = resUpdatedVideo);
    this.selectedVideo = null;
  };

  onDeleteVideoEvent(video: Video) {
    let videoList = this.videos;
    this._videoService.deleteVideo(video)
      .subscribe(resDeletedVideo => {
        for (let i = 0; i < videoList.length; i++) {
          if (videoList[i]._id == video._id) {
            videoList.splice(i, 1);
          }
        }
      });
    this.selectedVideo = null;
  };

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos().subscribe(resVideoData => this.videos = resVideoData);
  }

}

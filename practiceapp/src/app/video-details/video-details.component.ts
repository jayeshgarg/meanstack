import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  inputs: ['video']
})
export class VideoDetailsComponent implements OnInit {

  constructor() { }

  private editTitle: boolean = false;

  onTitleClick() {
    this.editTitle = true;
  }

  ngOnChanges() {
    this.editTitle = false;
  }
  ngOnInit() {
  }

}

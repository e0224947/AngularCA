import { Component, OnInit, Output, ViewChild, Input, EventEmitter } from '@angular/core';
import { ImageService } from "../image.service";

@Component({
  selector: 'app-show-images',
  templateUrl: './show-images.component.html',
  styleUrls: ['./show-images.component.css']
})
export class ShowImagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input()
  img = "";

  @Output()
  imageClicked: EventEmitter<string> = new EventEmitter<string>();

  passUrl(){
    console.log(">>> image = ", this.img);
    this.imageClicked.next(this.img);
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy, Injectable } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import { ImageService } from "../image.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

@Injectable()
export class SearchComponent implements OnInit {

  @Output()
  keyword: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  urls: EventEmitter<string[]> = new EventEmitter<string[]>();

  @ViewChild('searchForm')
  searchFrom: NgForm;

  constructor(private httpClient: HttpClient, private imageSvc : ImageService) {}

  url = [];

  ngOnInit() {
    
  }

  search(){
    
    let keyword = this.searchFrom.value.search;
    this.keyword.next(keyword);
  }

  check(){
    this.url = [];
    this.imageSvc.GetImage()
      .then(result => {
        for (let index = 0; index < result.length; index++) {
          const element = result[index]["url"];
          this.url.push(element);
        }  
        this.urls.next(this.url);
        console.log(">>> result = ", this.url);
      }    
    )
      .catch(error => {
        console.log(">>> error = ", error);
      })
    
  }
}

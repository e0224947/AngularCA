import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageService } from '../app/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private httpClient: HttpClient, private imageSvc : ImageService) {}

  images = [];
  urllist = [];
  total = 0;
  totalpage = [];
  item = "";

  changePage(l : any){
    this.urllist = [];
    this.images = [];
    this.totalpage = [];
    var url = `https://api.giphy.com/v1/gifs/search?api_key=SS4Mp2ZLDBE8spR3Cj1WBgXaM2JAu2Zf&q=${this.item}&limit=25&offset=${l*25}&rating=Y&lang=zh-CN`;
    this.httpClient.get(url).subscribe((data => {
      for (let index = 0; index < data["data"].length; index++) {
        this.total = Math.ceil(parseInt(data["pagination"]["total_count"])/25);
        const element = data["data"][index];
        this.images.push(element.images.original.url);
      }
      for (let index = 1; index < this.total; index++) {
        this.totalpage.push(index);     
      }
    }))
    console.log(this.totalpage);
  }


  getImages(item : string){
    this.urllist = [];
    this.images = [];
    this.item = item;
    this.totalpage = [];
    var url = `https://api.giphy.com/v1/gifs/search?api_key=SS4Mp2ZLDBE8spR3Cj1WBgXaM2JAu2Zf&q=${this.item}&limit=25&offset=0&rating=Y&lang=zh-CN`;
    this.httpClient.get(url).subscribe((data => {
      for (let index = 0; index < data["data"].length; index++) {
        this.total = Math.ceil(parseInt(data["pagination"]["total_count"])/25);
        const element = data["data"][index];
        this.images.push(element.images.original.url);
      }
      for (let index = 1; index < this.total; index++) {
        this.totalpage.push(index);     
      }
    }))
    console.log(this.totalpage);
  }

  saveImg(url : string){
    console.log("url>>>>>>>" + url);
    this.imageSvc.SaveImage(url);

  }

  checkItem(urls : string[]){
    this.urllist = urls;
    this.images = [];
    this.totalpage = [];
    console.log(this.urllist);
  }
}

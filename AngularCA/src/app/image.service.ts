import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImageService {

  constructor(private http: HttpClient) { }

  GetImage(): Promise<any> {
    return (this.http.get("http://localhost:8080/Server/retrieve")
      .take(1)
      .toPromise());
  }

  SaveImage(url: string){
    this.http.get(`http://localhost:8080/Server/save/${url}`).take(1).toPromise();
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search.component';
import { ShowImagesComponent } from './components/show-images.component';
import { ImageService } from './image.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

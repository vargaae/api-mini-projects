import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ImageService } from '../shared/image.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent {
  // @ViewChild(CdkVirtualScrollViewport)
  // viewport: CdkVirtualScrollViewport;

  batch = 20;
  theEnd = false;

  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;


// IMAGE SEARCH
searchQuery = "";

  onKeyPressed(query: string) {
    console.log(query);
  }

  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;

  handleSuccess(data){
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error){
    console.log(error);
  }

  constructor(private imageService : ImageService) { }

  searchImages(query: string){
    // this.searching = true;
    return this.imageService.getImage(query).subscribe(
      // data => console.log(data),
      // error => console.log(error),
      // () => console.log("Request complete!")
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }
}

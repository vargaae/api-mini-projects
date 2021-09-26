import { Component } from '@angular/core';

@Component({
  selector: 'app-pixabay',
  templateUrl: './pixabay.component.html',
  styleUrls: ['./pixabay.component.scss']
})
export class PixabayComponent {
  courseCategories = [
    { id: 1, name:'Development' },
    { id: 2, name:'Art' },
    { id: 3, name:'Languages' },
  ]

submit(course: any) {
  console.log(course);
}

  constructor() { }



}

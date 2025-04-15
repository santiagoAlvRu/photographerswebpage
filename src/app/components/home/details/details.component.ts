import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iphotos } from '../../../iphotos';
import { photos } from '../../../photos';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

photos: Iphotos | undefined;

constructor(private route:ActivatedRoute) {
  const idParam = this.route.snapshot.params['photoId'];
  let id = Number(idParam);
  this.photos = photos.find(val => val.id === id);
}
}



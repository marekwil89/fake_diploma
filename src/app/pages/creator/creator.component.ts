import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent {
  public data = [{
    name: 'first template',
    description: 'first template description',
    image: 'https://dummyimage.com/600x400/000/fff'
  }]

}

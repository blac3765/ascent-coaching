import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	showNavigationArrows = false;
	showNavigationIndicators = false;
	images = [
		'../assets/home-1.jpg',
		'../assets/home-3.jpg',
		'../assets/home-2.jpg'
	]

  constructor() {
  }

  ngOnInit() {
  }

}

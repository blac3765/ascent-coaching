import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	collapsed = true;
	mobile = false;
	wsMode = false;
	isNavbarCollapsed=true;
	constructor() {

	}
	toggleNav() {
		console.log('isNavbarCollapsed: %o', this.isNavbarCollapsed);
		this.isNavbarCollapsed = !this.isNavbarCollapsed;
	}
}

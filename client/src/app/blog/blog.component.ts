import { Component } 	from '@angular/core';
import { ApiService } 	from '../api.service';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
	blogs:any = [];

	constructor(private apiService:ApiService) {
		this.apiService.getBlogs().then(blogs => {
			this.blogs = blogs;
		})
	}

}

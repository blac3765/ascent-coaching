import { Injectable }	from '@angular/core';
import { HttpClient }	from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(public http:HttpClient) {}

	sendEmail(info) {
		return this.http.post('/api/email', info).toPromise();
	}

	getBlogs() {
		return this.http.get('/api/blogs').toPromise();
	}
}

import { Component } 												from '@angular/core';
import { FormsModule, NgForm } 										from '@angular/forms';
import { ApiService } 												from '../api.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
	customer = {
		name:'',
		email:'',
		service:'',
		experience:'',
		message:'',
		contact:'',
		phoneContact: false,
		emailContact: false,
		socialContact: false
	}
	busy:boolean = false;
	sent:boolean = false;
	error:boolean = false;
	message:string = "Send Contact Form"
	constructor(private apiService:ApiService) { }

	sendForm() {
		this.busy = true;
		this.message = "Sending..."
		if(this.customer.phoneContact) this.customer.contact = 'phone';
		if(this.customer.emailContact) this.customer.contact = 'email';
		if(this.customer.socialContact) this.customer.contact = 'social';
		this.apiService.sendEmail(this.customer).then((res:any) => {
			this.busy = false;
			if(res.accepted) {
				this.message = "Sent";
				this.sent = true;
			} else {
				this.error = true;
				this.message = "Try again"
			}
		});
	}
}

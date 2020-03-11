import { BrowserModule } 					from '@angular/platform-browser';
import { NgModule } 						from '@angular/core';
import { FormsModule }						from '@angular/forms';
import { NgbModule } 						from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }					from '@angular/common/http';


import { AppRoutingModule } 				from './app-routing.module';
import { AppComponent } 					from './app.component';
import { HomeComponent } 					from './home/home.component';
import { ContactComponent } 				from './contact/contact.component';
import { AboutComponent } 					from './about/about.component';
import { ServicesComponent } 				from './services/services.component';
import { SideNavComponent } 				from './side-nav/side-nav.component';
import { CarouselComponent } 				from './carousel/carousel.component';
import { BlogComponent } 					from './blog/blog.component';
import { ProcessComponent } 				from './process/process.component';
import { OrganizationBenefitsComponent } 	from './organization-benefits/organization-benefits.component';
import { FaqsComponent } 					from './faqs/faqs.component';
import { HowCoachComponent } 				from './how-coach/how-coach.component';
import { WhoCoachComponent } 				from './who-coach/who-coach.component';
import { CfoComponent } from './cfo/cfo.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ContactComponent,
		AboutComponent,
		ServicesComponent,
		SideNavComponent,
		CarouselComponent,
		BlogComponent,
		ProcessComponent,
		OrganizationBenefitsComponent,
		FaqsComponent,
		HowCoachComponent,
		WhoCoachComponent,
		CfoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		NgbModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

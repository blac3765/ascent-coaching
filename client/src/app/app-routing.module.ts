import { NgModule } 			from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } 					from './home/home.component';
import { ContactComponent } 				from './contact/contact.component';
import { AboutComponent } 					from './about/about.component';
import { ServicesComponent } 				from './services/services.component';
import { BlogComponent }					from './blog/blog.component';
import { ProcessComponent }					from './process/process.component';
import { OrganizationBenefitsComponent } 	from './organization-benefits/organization-benefits.component';
import { FaqsComponent } 					from './faqs/faqs.component';
import { HowCoachComponent } 				from './how-coach/how-coach.component';
import { WhoCoachComponent } 				from './who-coach/who-coach.component';
import { CfoComponent }						from './cfo/cfo.component';

const routes: Routes = [
	{path:'',							redirectTo:'/home', pathMatch:'full'},
	{path:'home',						component:HomeComponent},
	{path:'contact',					component:ContactComponent},
	{path:'about',						component:AboutComponent},
	{path:'blog',						component:BlogComponent},
	{path:'services',					component:ServicesComponent},
	{path:'method',						component:ProcessComponent},
	{path:'org',						component:OrganizationBenefitsComponent},
	{path:'faqs',						component:FaqsComponent},
	{path:'who',						component:WhoCoachComponent},
	{path:'how',						component:HowCoachComponent},
	{path:'cfo',						component:CfoComponent},
	{path: '**',						redirectTo:'/home'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

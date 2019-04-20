import { NgModule } 			from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } 		from './home/home.component';
import { ContactComponent } 	from './contact/contact.component';
import { AboutComponent } 		from './about/about.component';
import { ServicesComponent } 	from './services/services.component';
import { BlogComponent }		from './blog/blog.component';
import { ProcessComponent }		from './process/process.component';

const routes: Routes = [
	{path:'',							redirectTo:'/home', pathMatch:'full'},
	{path:'home',						component:HomeComponent},
	{path:'contact',					component:ContactComponent},
	{path:'about',						component:AboutComponent},
	{path:'blog',						component:BlogComponent},
	{path:'services',					component:ServicesComponent},
	{path:'method',						component:ProcessComponent},
	{path: '**',						redirectTo:'/home'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

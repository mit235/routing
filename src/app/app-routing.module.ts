import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';

const routes: Routes = [
{
  path:'about',
  component:AboutComponent,
  children:[{
    path:'aboutMe',
    component:AboutMeComponent
  },{
    path:'aboutCompany',
    component:AboutCompanyComponent
  }
]
},
{
  
  component:UserComponent,
  path:'user/:id'
},
{
  path:'',
  component:HomeComponent
},
{
  path:'**',
  component:NoPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

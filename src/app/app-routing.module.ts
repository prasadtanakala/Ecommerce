import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailedPageComponent } from './detailed-page/detailed-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewPageComponent } from './view-page/view-page.component';

const routes: Routes = [
  // {path:'',component:HomepageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'detailpage',component:DetailedPageComponent},
  {path:'viewPage',component:ViewPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

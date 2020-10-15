import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
 {path:'',component : HomeComponent}, 
{path:'personal-details', component : PersonalDetailsComponent},
{path:'professional-details', component : ProfessionalDetailsComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

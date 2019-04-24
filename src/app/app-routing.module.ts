import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaviIconComponent } from './favi-icon/favi-icon.component';
import { CarbrandsComponent } from './carbrands/carbrands.component';
const routes: Routes = [
  
  {path:'about',component:AboutComponent},
  {path:'carbrands',component:CarbrandsComponent},
  {path:'',component:FaviIconComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

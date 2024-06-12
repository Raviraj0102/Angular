import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineapplicationComponent } from './onlineapplication/onlineapplication.component';
import { ApplicancesComponent } from './applicances/applicances.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { FashionComponent } from './fashion/fashion.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { LightingComponent } from './lighting/lighting.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'',component:OnlineapplicationComponent},
  {path:'applicances',component:ApplicancesComponent,children:[
    {path:'furniture',component:FurnitureComponent},
    {path:'lighting',component:LightingComponent}
  ]},

  {path:'electronic',component:ElectronicComponent,children:[
    {path:'mobile',component:MobileComponent},
    {path:'laptop',component:LaptopComponent}]},

  {path:'fashion',component:FashionComponent,
  children:[{path:'men',component:MobileComponent},
  {path:'women',component:WomenComponent}]},

  {path:'login',component:LoginComponent},
  
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

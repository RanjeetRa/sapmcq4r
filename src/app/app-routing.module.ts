import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sapecpart1Component } from './sapecpart1/sapecpart1.component';
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SappgdmComponent } from './sappgdm/sappgdm.component';

//const routes: Routes = [];
const appRoutes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'sapec1', component: Sapecpart1Component },
  { path: 'sappgdm', component: SappgdmComponent },
  { path: 'sapec2', component: Sapecpart1Component },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  
}

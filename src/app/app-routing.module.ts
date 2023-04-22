import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WhatToWhatchComponent } from './what-to-whatch/what-to-whatch.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'w2w', component: WhatToWhatchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

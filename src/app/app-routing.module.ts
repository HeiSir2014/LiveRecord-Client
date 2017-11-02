import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatformComponent } from './platform.component';
import { PlatformDetailComponent } from './platform.detail.component'
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './page_not_found.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'platform',component: PlatformComponent },
    { path: 'login', component: LoginComponent },
    { path:'detail/:id',component:PlatformDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

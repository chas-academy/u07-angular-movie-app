import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent},
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: 
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

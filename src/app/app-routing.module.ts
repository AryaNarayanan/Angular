import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { FavoritesComponent } from './MyComponents/favorites/favorites.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

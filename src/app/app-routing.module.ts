import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddMoviesComponent } from './component/add-movies/add-movies.component';
import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './component/movies-details/movies-details.component';

const routes: Routes = [
  {path:'',redirectTo:'surya',pathMatch:'full'},
  {path:'add-movies',component:AddMoviesComponent},
  {path:'movies-details',component:MoviesDetailsComponent},
  {path:'movies-list',component:MoviesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

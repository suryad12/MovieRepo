import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMoviesComponent } from './component/add-movies/add-movies.component';
import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './component/movies-details/movies-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AddMoviesComponent,
    MoviesListComponent,
    MoviesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

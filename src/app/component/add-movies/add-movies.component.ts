import { Component,OnInit} from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit{

  Movie={
    title:'',
    description:'',
    published:false
  }
  submitted=false;
  constructor(private movieservice:MovieServiceService) { }
  
  ngOnInit() {
  }
  
  saveMovie() {
    const data = {
      title: this.Movie.title,
      description: this.Movie.description
    };
  
    this.movieservice.create(data)
      .subscribe(
      ( response :any)=> {
        console.log(response);
          this.submitted = true;
         },
         (error:any) => {
           console.log(error);
         });
  }
  AddMovie(){
    this.newMovie();
  }
  newMovie() {
    this.submitted = false;
    this.Movie = {
      title: '',
      description: '',
      published: false
    };
  }
  }


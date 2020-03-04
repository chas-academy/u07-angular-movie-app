import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: any[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    //console.log(this.getMovies());
    console.log(this.movieService.getMovies());
  }

  getMovies(): void {
    //this.movies = this.movieService.getMovies();
  }

}

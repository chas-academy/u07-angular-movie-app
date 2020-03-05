import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../../movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[];
  filter = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getPopular();
  }

  getPopular(): void {
    this.movieService.getPopular().subscribe(data => this.movies = data['results']);
  }
}

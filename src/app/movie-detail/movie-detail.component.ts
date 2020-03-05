import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor( 
    private movieService: MovieService, 
    private route: ActivatedRoute, 
    private location: Location 
  ) { }

 

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getDetails(id).subscribe(data => this.movie = data);
  }

}

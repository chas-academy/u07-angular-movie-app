import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../../movie';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  movies: Movie[];

  actors: any;

  moviesByActor: Movie[];

  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) { }

  search(term: string): void {
    this.movieService.searchMovies(term).subscribe(data => this.movies = data['results']);
    this.movieService.searchActors(term).subscribe(data => this.actors = data['results']);

    if (!this.actors) {
      return;
    }

    this.movieService.moviesByActor(this.actors).subscribe(data => this.moviesByActor = data['credits']['cast'].slice(0, 15));
    
  }

  ngOnInit(): void {

  }
}

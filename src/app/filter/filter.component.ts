import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../../movie';
import { Actor } from '../../actor';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  movies: Movie[];

  actors: Actor[];

  moviesByActor: Movie[];

  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) { }

  search(term: string): void {
    this.movieService.searchMovies(term).pipe(debounceTime(500), distinctUntilChanged()).subscribe(data => this.movies = data['results']);
    this.movieService.searchActors(term).pipe(debounceTime(500), distinctUntilChanged()).subscribe(data => this.actors = data['results']);

    if (!this.actors) {
      return;
    }

    this.movieService.moviesByActor(this.actors[0]).subscribe(data => this.moviesByActor = data['credits']['cast'].slice(0, 12));
    
  }

  ngOnInit(): void {

  }
}

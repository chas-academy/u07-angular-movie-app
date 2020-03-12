import { Component, OnInit } from '@angular/core';


import { Movie } from '../../movie';
import { Actor } from '../../actor';
import { MovieService } from '../movie.service';


import { Observable, Subject, fromEventPattern } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { DbRes } from 'src/dbRes';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  movies: Movie[];

  movies$: Observable<DbRes>;

  //actors$: Observable<Actor[]>;

  //moviesByActor$: Movie[];

  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) { }

  search(term: string): void {
    //this.movieService.searchMovies(term).subscribe(response => this.movies = response['results']);
    //console.log(this.movies);
    //this.movieService.searchActors(term).subscribe(data => this.actors = data['results']);

    //if (!this.actors) {
    //  return;
    //}

    //this.movieService.moviesByActor(this.actors[0]).subscribe(data => this.moviesByActor = data['credits']['cast'].slice(0, 12));
    
    this.searchTerms.next(term);
    console.log(this.movies$);
  }

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.movieService.searchMovies(term)),
    );
  }
}

import { Injectable } from '@angular/core';

import { Movie } from '../movie';
import { Actor } from '../actor';
import { DbRes } from '../dbRes';
import { MessageService } from './message.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'b317a5902e7d51146c027ffdb0804d6b';
  private popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=1`;

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getPopular() {
    return this.httpClient.get<DbRes>(this.popularUrl);
  }

  getDetails(movie_id) {
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.apiKey}`);
  }

  searchMovies(term: string): Observable<any> {
    if (!term.trim()) {
      return of([]);
    }

    return this.httpClient.get<DbRes>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${term}&page=1&include_adult=false`).pipe(
      catchError(this.handleError)
    );
  }

  searchActors(term: string): Observable<Actor[]> {
    if (!term.trim()) {
      return of([]);
    }
    
    return this.httpClient.get<Actor[]>(`https://api.themoviedb.org/3/search/person?api_key=${this.apiKey}&query=${term}&page=1&include_adult=false`);
  }

  moviesByActor(actor: Actor): Observable<Movie[]> {
    if (!actor) {
      return of([]);
    }

    return this.httpClient.get<Movie[]>(`https://api.themoviedb.org/3/person/${actor['id']}?api_key=${this.apiKey}&append_to_response=credits`);
  }

  private log(message: string) {
    this.messageService.add(`MovieServive: ${message}`);
  }
      
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

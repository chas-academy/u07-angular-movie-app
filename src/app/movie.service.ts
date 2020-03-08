import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { Observable, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'b317a5902e7d51146c027ffdb0804d6b';
  private popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=1`;

  constructor(private httpClient: HttpClient) { }

  getPopular() {
    return this.httpClient.get<Movie[]>(this.popularUrl);
  }

  getDetails(movie_id) {
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.apiKey}`);
  }

  search(term: string) {
    if (!term.trim()) {
      return of([]);
    }

    return this.httpClient.get<Movie[]>(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${term}&page=1&include_adult=false`);
  }
}

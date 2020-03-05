import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../movie';
//import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'b317a5902e7d51146c027ffdb0804d6b';
  private popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=1`;
  private movieUrl = '';

  /*
  private httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };
  */

  constructor(private httpClient: HttpClient) { }

  getPopular() {
    return this.httpClient.get<Movie[]>(this.popularUrl);
  }

  getAllMovies() {
    return this.httpClient.get<Movie[]>(this.movieUrl);
  }

  getDetails(movie_id) {
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.apiKey}`);
  }
}

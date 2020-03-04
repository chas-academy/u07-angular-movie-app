import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../movie';
//import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'b317a5902e7d51146c027ffdb0804d6b';
  private movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}page=1`;
  private testUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b317a5902e7d51146c027ffdb0804d6b&language=en-US&page=1';

  private httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get<Movie[]>(this.testUrl);
  }
}

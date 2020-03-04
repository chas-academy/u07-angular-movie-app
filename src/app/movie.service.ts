import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'b317a5902e7d51146c027ffdb0804d6b';
  private movieUrl = `api.themoviedb.org/3/movie/550?api_key=${this.apiKey}`;

  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get(this.movieUrl);
  }
}

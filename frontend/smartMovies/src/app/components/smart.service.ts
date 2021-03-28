import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieDetails } from './movie-details.interface';
import { Movies } from './movies.interface';
import { SerieDetails } from './serie-details.interface';
import { Series } from './series.interface';


@Injectable({
  providedIn: 'root'
})
export class SmartService {

  baseUrl = 'http://localhost:3000';
  apiKey: 'db362a3de317f0a55bf7414630719b5d';

  constructor(
  private http: HttpClient
  ) { }

  getNowPlaying(page: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/filmes/now_playing?`);
  }

  getMovies(page: number): Observable<any> {
    return this.http.get<Movies[]>(`${this.baseUrl}/filmes?page=${page}`);
  }

  getMovieDetails(id: string) {
    return this.http.get<MovieDetails[]>(`${this.baseUrl}/filmes/${id}`);
  }

  // getBackdropsImages(id: string) {
  //   return this.http.get(`${this.baseUrl}/filmes/${id}/images?`);
  // }

  getMovieCredits(id: string) {
    return this.http.get(`${this.baseUrl}/filmes/${id}?credits`);
  }


  getSeries(page: number): Observable<any> {
    return this.http.get<Series[]>(`${this.baseUrl}/series?page=${page}`);
  }

  getSeriesDetails(id: string) {
    return this.http.get<SerieDetails[]>(`${this.baseUrl}/series/${id}`);
  }

  getSerieCredits(id: string) {
    return this.http.get(`${this.baseUrl}/series/${id}?credits`);
  }

}


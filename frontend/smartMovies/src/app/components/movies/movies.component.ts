import { Component, OnInit } from '@angular/core';

import { SmartService } from './../smart.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any;
  totalResults: any;
  // tslint:disable-next-line: variable-name
  total_results: any;

  constructor(
    private smartService: SmartService
  ) { }

  ngOnInit(): void {
    this.getMoviesList(1);
  }

  getMoviesList(page: number) {
    this.smartService.getMovies(page).subscribe((res: any) => {
      this.movies = res.results;
      this.totalResults = res.total_results;
      console.dir(res);
      console.log('Response deu certo no console', res);
    },
    error => this.onError(error)
    );
  }

  onError(error: any) {
    console.log('Erro ao carregar os filmes');
  }

  changePage(event) {
    this.getMoviesList(event.pageIndex + 1);
  }

}



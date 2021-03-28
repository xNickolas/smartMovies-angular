import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SmartService } from './../smart.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;
  casts: any = [];
  backdrops: any = [];
  public id: number;

  constructor(
    private smartService: SmartService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getSingleMoviesDetails(this.id);
      this.getCast(this.id);
    });
  }

  getSingleMoviesDetails(id){
    this.smartService.getMovieDetails(id).subscribe((res: any) => {
      this.movie = res;
    });
  }

  getCast(id) {
    this.smartService.getMovieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
      console.dir(res);
      console.log('Response deu certo no console', res);
    }),
    error => this.onError(error);
  }

  onError(error: any) {
    console.log('Erro ao carregar os filmes');
  }

}

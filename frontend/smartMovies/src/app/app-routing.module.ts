import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvSeriesDetailsComponent } from './components/tv-series-details/tv-series-details.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
      {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full'
      },
      {
        path: 'movies',
        component: MoviesComponent,
      },
      {
        path: 'tv-series',
        component: TvSeriesComponent,
      },
    ]
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'tv-series/:id',
    component: TvSeriesDetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

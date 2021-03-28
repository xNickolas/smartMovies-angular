import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';

import { SmartService } from '../../app/components/smart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  movies_data: any;

  current = 0;

  constructor(
    private smartService: SmartService
  ) { }

  ngOnInit(): void {
    this.getNowPlayingMovies(1);
    this.sliderTimer();
  }

  getNowPlayingMovies(page: number) {
    this.smartService.getNowPlaying(page)
    .pipe(
      delay(1000)
    )
    .subscribe((res: any) => {
      this.movies_data = res.results;
      console.dir(res);
      console.log('PlayingNow deu certo no console', res);
    });
  }

  sliderTimer() {
    setInterval(() => {
      this.current = ++this.current % this.movies_data.length;
    }, 5000);
  }

}

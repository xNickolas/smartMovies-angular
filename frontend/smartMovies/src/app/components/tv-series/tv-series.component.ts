import { Component, OnInit } from '@angular/core';

import { SmartService } from './../smart.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TvSeriesComponent implements OnInit {

  series: any;
  totalResults: any;
  // tslint:disable-next-line: variable-name
  total_results: any;

  constructor(
    private smartService: SmartService
  ) { }

  ngOnInit(): void {
    this.getSeriesList(1);
  }

  getSeriesList(page: number) {
    this.smartService.getSeries(page).subscribe((res: any) => {
      this.series = res.results;
      this.totalResults = res.total_results;
      console.dir(res);
      console.log('Response series deu certo no console', res);
    },
    error => this.onError(error)
    );
  }

  onError(error: any) {
    console.log('Erro ao carregar as series');
  }

  changePage(event) {
    this.getSeriesList(event.pageIndex + 1);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SmartService } from './../smart.service';

@Component({
  selector: 'app-tv-series-details',
  templateUrl: './tv-series-details.component.html',
  styleUrls: ['./tv-series-details.component.scss']
})
export class TvSeriesDetailsComponent implements OnInit {

  serie: any;
  casts: any = [];
  public id: number;

  constructor(
    private smartService: SmartService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getSingleSerieDetails(this.id);
      this.getCast(this.id);
    });
  }

  getSingleSerieDetails(id){
    this.smartService.getSeriesDetails(id).subscribe((res: any) => {
      this.serie = res;
    });
  }

  getCast(id) {
    this.smartService.getSerieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
      console.dir(res);
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/fetch-data.service';

@Component({
  selector: 'app-movie-search-year',
  templateUrl: './movie-search-year.component.html',
  styleUrls: ['./movie-search-year.component.sass'],
})
export class MovieSearchYearComponent implements OnInit {
  @Input() year?;
  @Input() getYearMovies?;
  @Input() yearMovie?;
  @Input() pageAccessor?;

  constructor(private fetchService: FetchDataService) {}

  previousHandler() {
    if (this.pageAccessor > 0) {
      this.pageAccessor = this.pageAccessor - 1;
      this.getYearMovies();
    } else null;
  }

  nextHandler() {
    if (this.pageAccessor < 50) {
      this.pageAccessor = this.pageAccessor + 1;
      this.getYearMovies();
      console.log(this.year);
    } else null;
  }

  yearHandler(allYears) {
    this.year = allYears;
    this.getYearMovies();
    console.log(this.year, 'hello mama');
  }

  ngOnInit(): void {
    this.getYearMovies();
  }
}

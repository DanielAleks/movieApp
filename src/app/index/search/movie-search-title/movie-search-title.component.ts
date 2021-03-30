import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/fetch-data.service';

@Component({
  selector: 'app-movie-search-title',
  templateUrl: './movie-search-title.component.html',
  styleUrls: ['./movie-search-title.component.sass'],
})
export class MovieSearchTitleComponent implements OnInit {
  title;
  query = 'Crime';
  pageAccessor = 1;
  constructor(private fetchService: FetchDataService) {}

  searchMovie() {
    this.fetchService
      .searchByTitle(this.query, this.pageAccessor)
      .subscribe((data) => {
        this.title = data.results;
        console.log(data, 'HEY homie');
      });
  }

  submitHandler() {
    this.searchMovie()
  }

  previousHandler() {
    if (this.pageAccessor > 0) {
      this.pageAccessor = this.pageAccessor - 1;
      this.searchMovie();
    } else null;
  }
  nextHandler() {
    if (this.pageAccessor < 50) {
      this.pageAccessor = this.pageAccessor + 1;
      this.searchMovie();
    } else null;
  }

  ngOnInit(): void {
    this.searchMovie();
  }
}

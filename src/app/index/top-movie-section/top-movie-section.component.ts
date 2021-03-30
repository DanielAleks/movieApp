import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/fetch-data.service';

@Component({
  selector: 'app-top-movie-section',
  templateUrl: './top-movie-section.component.html',
  styleUrls: ['./top-movie-section.component.sass'],
})
export class TopMovieSectionComponent implements OnInit {
  trending;
  genres;
  accessor = 1
  constructor(private fetchService: FetchDataService) {}

  trendingMovies() {
    this.fetchService.trendingMovies().subscribe((data) => {
      console.log(data, 'genre COYIOBRO');
      this.trending = data.results;
    });
  }
  genreListMovies() {
    this.fetchService.genreList().subscribe((data) => {
      console.log(data, 'list');
      this.genres = data.genres;
    });
  }

  accessorHandler(index) {
    this.accessor = index
    this.trendingMovies()
  }

  ngOnInit(): void {
    this.trendingMovies();
    this.genreListMovies();
  }
}

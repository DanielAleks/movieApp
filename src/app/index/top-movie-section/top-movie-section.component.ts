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
  constructor(private fetchService: FetchDataService) {}

  trendingMovies() {
    this.fetchService.trendingMovies().subscribe((data) => {
      console.log(data);
      this.trending = data.results;
    });
  }
  genreListMovies() {
    this.fetchService.genreList().subscribe((data) => {
      console.log(data, 'genre');
      this.genres = data.genres;
    });
  }

  ngOnInit(): void {
    this.trendingMovies();
    this.genreListMovies();
  }
}

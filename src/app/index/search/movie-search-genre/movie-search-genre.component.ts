import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/fetch-data.service';

@Component({
  selector: 'app-movie-search-genre',
  templateUrl: './movie-search-genre.component.html',
  styleUrls: ['./movie-search-genre.component.sass'],
})
export class MovieSearchGenreComponent implements OnInit { 
  list = 10749 
  movieInGenre;

  constructor(private fetchService: FetchDataService) {}

  getMoviesByGenre() {
    this.fetchService.genreMovies(this.list).subscribe((data) => {
      this.movieInGenre = data.results;
      console.log(data, 'HEY PAPA!!!')
    });
  }

  ngOnInit(): void {
    this.getMoviesByGenre();
  }
}

import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/fetch-data.service';

@Component({
  selector: 'app-movie-search-genre',
  templateUrl: './movie-search-genre.component.html',
  styleUrls: ['./movie-search-genre.component.sass'],
})
export class MovieSearchGenreComponent implements OnInit {
  list = 28;
  movieInGenre;

  genreList = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ];

  constructor(private fetchService: FetchDataService) {}

  getMoviesByGenre() {
    this.fetchService.genreMovies(this.list).subscribe((data) => {
      this.movieInGenre = data.results;
      console.log(data, 'HEY PAPA!!!');
    });
  }
  changeGenreHandler(genreList) {
    this.list = genreList.id;
    console.log(this.list, 'here Now')
    this.getMoviesByGenre();
  }

  ngOnInit(): void {
    this.getMoviesByGenre();
  }
}

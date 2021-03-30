import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/fetch-data.service';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.sass'],
})
export class MovieSectionComponent implements OnInit {
  // comedy;
  // drama;
  // family;
  // fantasy;
  // horror;
  // romance;
  genre;

  list = [
    { name: 'Action', id: 28 },
    { name: 'Comedy', id: 35 },
    { name: 'Drama', id: 18 },
    { name: 'Horror', id: 27 },
    { name: 'Romance', id: 10749 },
    { name: 'Fantasy', id: 14 },
    { name: 'Family', id: 10751 },
  ];

  constructor(public fetchService: FetchDataService) {}

  getMoviesByGenre() {
    this.list.map((item) => {
      this.fetchService.genreMovies(item).subscribe((data) => {
        this.genre = data;
        console.log(data, 'GenreMovies, !!!!!!');
      });
    });
  }

  ngOnInit(): void {
    this.getMoviesByGenre();
  }
}

// this.romanceMovies();
// this.horrorMovies();
// this.fantasyMovies();
// this.familyMovies();
// this.dramaMovies();
// this.comedyMovies();

// comedyMovies() {
//   this.fetchService.comedyMovies().subscribe((data) => {
//     this.comedy = data.results;
//   });
// }
// dramaMovies() {
//   this.fetchService.dramaMovies().subscribe((data) => {
//     this.drama = data.results;
//   });
// }
// familyMovies() {
//   this.fetchService.familyMovies().subscribe((data) => {
//     this.family = data.results;
//   });
// }
// fantasyMovies() {
//   this.fetchService.fantasyMovies().subscribe((data) => {
//     this.fantasy = data.results;
//   });
// }
// horrorMovies() {
//   this.fetchService.horrorMovies().subscribe((data) => {
//     this.horror = data.results;
//   });
// }
// romanceMovies() {
//   this.fetchService.romanceMovies().subscribe((data) => {
//     this.romance = data.results;
//   });
// }

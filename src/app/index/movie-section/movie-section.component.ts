import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/fetch-data.service';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.sass'],
})
export class MovieSectionComponent implements OnInit {
  action;
  comedy;
  drama;
  family;
  fantasy;
  horror;
  romance;

  constructor(public fetchService: FetchDataService) {}

  actionMovies() {
    this.fetchService.actionMovies().subscribe((data) => {
      this.action = data.results;
    });
  }
  comedyMovies() {
    this.fetchService.comedyMovies().subscribe((data) => {
      this.comedy = data.results;
    });
  }
  dramaMovies() {
    this.fetchService.dramaMovies().subscribe((data) => {
      this.drama = data.results;
    });
  }
  familyMovies() {
    this.fetchService.familyMovies().subscribe((data) => {
      this.family = data.results;
    });
  }
  fantasyMovies() {
    this.fetchService.fantasyMovies().subscribe((data) => {
      this.fantasy = data.results;
    });
  }
  horrorMovies() {
    this.fetchService.horrorMovies().subscribe((data) => {
      this.horror = data.results;
    });
  }
  romanceMovies() {
    this.fetchService.romanceMovies().subscribe((data) => {
      this.romance = data.results;
    });
  }

  ngOnInit(): void {
    this.actionMovies();
    this.romanceMovies();
    this.horrorMovies();
    this.fantasyMovies();
    this.familyMovies();
    this.dramaMovies();
    this.comedyMovies();
  }
}

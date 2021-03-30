import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  isGenreModal = false;
  isYearModal = false;

  genreList = [
    { id: 0, name: 'Action' },
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

  allYears = [
    2021,
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
  ];
  year = 2021;
  action;
  yearMovie;
  pageAccessor = 1;

  constructor(private fetchService: FetchDataService) {}

  yearClickHandler(allYears) {
    this.year = allYears;
    this.getYearMovies();
  }

  getYearMovies() {
    this.fetchService
      .searchByYear(this.pageAccessor, this.year)
      .subscribe((data) => {
        this.yearMovie = data.results;
        console.log(data, 'YearlyData, HoldICECREAM');
      });
  }
  ngOnInit(): void {
    this.getYearMovies();
  }
}

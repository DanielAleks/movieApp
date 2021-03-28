import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  //   genres = [
  //     {'Action', actionGenre},
  //     {'Adventure', actionGenre},
  //     {'Anumation', actionGenre},
  //     {'Comedy', actionGenre},
  //     {'Crime', actionGenre},
  //     {'Documentary', actionGenre},
  //     {'Drama', actionGenre},
  //     {'Family', actionGenre},
  //     {'Fantasy', actionGenre},
  //     {'History', actionGenre},
  //     {'Horror', actionGenre},
  //     {'Musicals', actionGenre},
  //     {'Mystery', actionGenre},
  //     {'Romance', actionGenre},
  //     '{Sci-fi', actionGenre},
  //     {'Thriller', actionGenre},
  //     {'War', actionGenre},
  //     {'Western', actionGenre},
  // ];

  isModal = true;

  list = [
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

  action;

  constructor(private fetchService: FetchDataService) {}

  // genreMovies() {
  //   this.fetchService
  //     .actionMovies()
  //     .subscribe((data) => (this.action = data.genres));
  // }
  ngOnInit(): void {
    this.list.map((item) => {
      this.fetchService.genreMovies(item);
    });
  }
}

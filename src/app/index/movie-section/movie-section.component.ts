import { Component, OnInit, Input } from '@angular/core';
import { FetchDataService } from 'src/app/fetch-data.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, movieId } from '../../app.actions';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.sass'],
})
export class MovieSectionComponent implements OnInit {
  count$: Observable<number>;

  action;
  comedy;
  drama;
  horror;
  romance;
  fantasy;
  family;
  genre;

  constructor(
    public fetchService: FetchDataService,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }

  setMoviePreview({id}) {
    // this.store.dispatch(movieId())
  }

  actionMovies() {
    this.fetchService.genreMovies(28).subscribe((data) => { 
      this.action = data.results;
      console.log(data, 'hello this is THE ACTION MOVIES')
    });
  }
  comedyMovies() {
    this.fetchService.genreMovies(35).subscribe((data) => {
      this.comedy = data.results;
    });
  }
  dramaMovies() {
    this.fetchService.genreMovies(18).subscribe((data) => {
      this.drama = data.results;
    });
  }
  familyMovies() {
    this.fetchService.genreMovies(10751).subscribe((data) => {
      this.horror = data.results;
    });
  }
  fantasyMovies() {
    this.fetchService.genreMovies(14).subscribe((data) => {
      this.fantasy = data.results;
    });
  }
  horrorMovies() {
    this.fetchService.genreMovies(27).subscribe((data) => {
      this.horror = data.results;
      console.log(this.horror, 'popp');
    });
  }
  romanceMovies() {
    this.fetchService.genreMovies(10749).subscribe((data) => {
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

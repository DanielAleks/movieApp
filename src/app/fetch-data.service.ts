import { HttpClient } from '@angular/common/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  key = '181cebcde660761f642cb56a9e41a39f';
  trendingMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${this.key}`
    );
  }
  genreList(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.key}`
    );
  }
  actionMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`
    );
  }
  comedyMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`
    );
  }
  dramaMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`
    );
  }
  familyMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`
    );
  }
  fantasyMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14`
    );
  }
  horrorMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`
    );
  }
  romanceMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`
    );
  }
}

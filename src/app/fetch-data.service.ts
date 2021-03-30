import { HttpClient } from '@angular/common/http';
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
  genreMovies(list: any): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${list}`
    );
  }
  searchByYear(pageAccessor: number, year: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageAccessor}&year=${year}`
    );
  }
}

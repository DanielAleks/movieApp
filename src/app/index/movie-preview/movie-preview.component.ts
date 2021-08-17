import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../fetch-data.service';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.sass'],
})
export class MoviePreviewComponent implements OnInit {
  movie;
  list: [
    {
      id: 28;
    }
  ];

  constructor(private fetchService: FetchDataService) {}

  getGenreMovies() {
    this.fetchService.genreMovies(35).subscribe((data) => {
      this.movie = data.results;
      console.log(this.movie, 'hello LOOK HERE EEEEEEEEE');
    });
  }

  // fetchImage() {
  //   this.fetchService.genreMovies(list.id).subscribe((data) => {
  //     this.fantasy = data;
  //   });
  // }

  imageUrl =  
    'https://images.unsplash.com/photo-1616696695535-98369e260e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80';

  ngOnInit(): void {
    this.getGenreMovies();
  }
}

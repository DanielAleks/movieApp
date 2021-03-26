import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.sass'],
})
export class MovieSectionComponent implements OnInit {
  constructor() {}

  imageUrl =
    'https://images.unsplash.com/photo-1616696695535-98369e260e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80';

  ngOnInit(): void {}
}
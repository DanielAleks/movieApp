import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.sass'],
})
export class MovieSectionComponent implements OnInit {
  constructor() {}

  images = [
    { id: 11, title: 'Dr Nice' },
    { id: 12, title: 'Narco' },
    { id: 13, title: 'Bombasto' },
    { id: 14, title: 'Celeritas' },
    { id: 15, title: 'Magneta' },
    { id: 16, title: 'RubberMan' },
    { id: 17, title: 'Dynama' },
    { id: 18, title: 'Dr IQ' },
    { id: 19, title: 'Magma' },
    { id: 20, title: 'Tornado' },
  ];

  imageUrl =
    'https://images.unsplash.com/photo-1616696695535-98369e260e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80';

  ngOnInit(): void {}
}

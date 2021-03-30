import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchGenreComponent } from './movie-search-genre.component';

describe('MovieSearchGenreComponent', () => {
  let component: MovieSearchGenreComponent;
  let fixture: ComponentFixture<MovieSearchGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSearchGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

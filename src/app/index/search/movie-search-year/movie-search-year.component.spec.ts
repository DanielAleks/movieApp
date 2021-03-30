import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchYearComponent } from './movie-search-year.component';

describe('MovieSearchYearComponent', () => {
  let component: MovieSearchYearComponent;
  let fixture: ComponentFixture<MovieSearchYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSearchYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

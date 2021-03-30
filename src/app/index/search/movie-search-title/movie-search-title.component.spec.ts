import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchTitleComponent } from './movie-search-title.component';

describe('MovieSearchTitleComponent', () => {
  let component: MovieSearchTitleComponent;
  let fixture: ComponentFixture<MovieSearchTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSearchTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

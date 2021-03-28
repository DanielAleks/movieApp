import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMovieSectionComponent } from './top-movie-section.component';

describe('TopMovieSectionComponent', () => {
  let component: TopMovieSectionComponent;
  let fixture: ComponentFixture<TopMovieSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMovieSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMovieSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

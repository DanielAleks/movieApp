import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSectionComponent } from './movie-section/movie-section.component';
import { TopMovieSectionComponent } from './top-movie-section/top-movie-section.component';

const routes: Routes = [
  { path: 'first-component', component: TopMovieSectionComponent },
  { path: 'second-component', component: MovieSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieSectionComponent } from './movie-section/movie-section.component';
import { TopMovieSectionComponent } from './top-movie-section/top-movie-section.component';

const routes = [
  { path: 'one', component: MovieSectionComponent },
  { path: 'two', component: TopMovieSectionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieSectionComponent,
    TopMovieSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

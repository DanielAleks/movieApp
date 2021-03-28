import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieSectionComponent } from './index/movie-section/movie-section.component';
import { TopMovieSectionComponent } from './index/top-movie-section/top-movie-section.component';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';
import { IndexComponent } from './index/index.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FetchDataService } from './fetch-data.service';

const routes = [
  { path: '', component: IndexComponent },
  { path: 'movie-preview', component: MoviePreviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieSectionComponent,
    TopMovieSectionComponent,
    MoviePreviewComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    IvyCarouselModule,
  ],
  exports: [RouterModule],

  providers: [FetchDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

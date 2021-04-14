import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/nav/header/header.component';
import { FooterComponent } from './components/nav/footer/footer.component';
import { MovieComponent } from './components/movie/movie.component';
import { GenresComponent } from './components/genres/genres.component';
import { MovieCardComponent } from './components/common/movie-card/movie-card.component';
import { HomeFilterComponent } from './components/common/home-filter/home-filter.component';
import { FormsModule } from '@angular/forms';
import { FindSimilarComponent } from './components/find-similar/find-similar.component';
import { SearchComponent } from './components/common/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultCardComponent } from './components/common/search-result-card/search-result-card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TvComponent } from './components/tv/tv.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthService } from './components/auth/auth.service';
import { SavedMoviesComponent } from './components/saved-movies/saved-movies.component';
import { ActorComponent } from './components/actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    GenresComponent,
    MovieCardComponent,
    HomeFilterComponent,
    FindSimilarComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchResultCardComponent,
    SidenavComponent,
    TvComponent,
    LoginComponent,
    SignupComponent,
    SavedMoviesComponent,
    ActorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

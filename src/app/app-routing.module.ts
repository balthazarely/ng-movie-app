import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './components/actor/actor.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SearchComponent } from './components/common/search/search.component';
import { FindSimilarComponent } from './components/find-similar/find-similar.component';
import { GenresComponent } from './components/genres/genres.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SavedMoviesComponent } from './components/saved-movies/saved-movies.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { TvComponent } from './components/tv/tv.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'similar/:movieId/:test',
    component: FindSimilarComponent,
    data: { animation: 'GenresComponent' },
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { animation: 'GenresComponent' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'GenresComponent' },
  },
  {
    path: 'my-movies',
    component: SavedMoviesComponent,
    data: { animation: 'GenresComponent' },
  },
  {
    path: 'genres/:genreName',
    component: GenresComponent,
    data: { animation: 'GenresComponent' },
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'tv/:id',
    component: TvComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'actor/:id',
    component: ActorComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'results/:queryType/:mediaType/:query',
    component: SearchResultsComponent,
    data: { animation: 'AboutPage' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindSimilarComponent } from './components/find-similar/find-similar.component';
import { GenresComponent } from './components/genres/genres.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'similar/:movieId',
    component: FindSimilarComponent,
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

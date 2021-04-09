import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MovieGenreTypes } from 'src/app/models/movie-genre-types';
import { MoviesService } from 'src/app/services/movies.service';
import { loadStagger } from '../../animations';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
  animations: [loadStagger.loadStaggerTrigger],
})
export class GenresComponent implements OnInit {
  movies = [];

  // subscriotions array.
  // ng on destory unsub
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((routeParams) => {
      this.getTrendingMoviesForGenre(routeParams.genreName);
    });
  }

  getTrendingMoviesForGenre(genreName) {
    let key;
    if (genreName === 'comedy') key = 35;
    if (genreName === 'drama') key = 18;
    if (genreName === 'horror') key = 27;

    this.movieService.getTrendingMoviesByGenre(key).subscribe((data: any) => {
      this.movies = data.results;
    });
  }
}

// searchGenreId(genreName) {
//   this.movieService
//     .searchGenreId()
//     .pipe(
//       map((responseData) => {
//         const propertyNames = Object.entries(responseData);
//         let matched = propertyNames[0][1].find((x) => x.name === genreName);
//         return matched;
//       })
//     )
//     .subscribe((fetchedGenres: MovieGenreTypes[]) => {
//       this.genres = fetchedGenres;
//       console.log(this.genres);
//     });
// }

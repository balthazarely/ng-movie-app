import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadStagger } from 'src/app/animations';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-find-similar',
  templateUrl: './find-similar.component.html',
  styleUrls: ['./find-similar.component.scss'],
  animations: [loadStagger.loadStaggerTrigger],
})
export class FindSimilarComponent implements OnInit {
  selectedMovieID: number;
  movie = [];
  similarMovies = [];
  //// pagination variables
  loadingResults = false;
  pageNumber: number = 1;

  constructor(
    private movieService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((routerParams) => {
      console.log(routerParams);
      this.getSelectedMovieDetails(routerParams.movieId);
      this.getSimilarMovies(routerParams.movieId, this.pageNumber);
    });
  }

  getSelectedMovieDetails(movieId) {
    this.movieService.getMovie(movieId).subscribe((data: any) => {
      console.log(data);
      this.movie = data;
    });
  }

  getSimilarMovies(movieId, page) {
    this.movieService
      .getRecomendations(movieId, page)
      .subscribe((data: any) => {
        console.log(data);
        this.similarMovies = data.results;
      });
  }
}

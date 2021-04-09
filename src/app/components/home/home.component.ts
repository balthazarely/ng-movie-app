import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { loadStagger } from '../../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [loadStagger.loadStaggerTrigger],
})
export class HomeComponent implements OnInit {
  movies = [];
  loadingResults = false;
  pageNumber: number = 1;
  searchType: string = 'now_playing';
  includeGenres: string = '';

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.fetchMovieResults(
      this.pageNumber,
      this.searchType,
      this.includeGenres
    );
  }

  fetchMovieResults(page, searchType, genresIncluded) {
    this.movieService
      .getMovies(page, searchType, genresIncluded)
      .subscribe((data: any) => {
        this.movies = data.results;
        console.log(this.movies);
      });
  }
  loadMoreMovies(page, searchType, genresIncluded) {
    this.movieService
      .getMovies(page, searchType, genresIncluded)
      .subscribe((data: any) => {
        this.movies = this.movies.concat(data.results);
        this.loadingResults = false;
      });
  }

  onScroll() {
    setTimeout(() => {
      if (!this.loadingResults) {
        this.loadingResults = true;
        this.pageNumber++;
        this.loadMoreMovies(
          this.pageNumber,
          this.searchType,
          this.includeGenres
        );
      }
    }, 700);
  }

  sendSearchDataToParent(str) {
    this.searchType = str;
    this.fetchMovieResults(
      this.pageNumber,
      this.searchType,
      this.includeGenres
    );
  }
  sendGenrehDataToParent(str) {
    console.log(str);
    this.includeGenres = str;
    this.fetchMovieResults(
      this.pageNumber,
      this.searchType,
      this.includeGenres
    );

    // this.searchType = str;
    // this.fetchMovieResults(this.pageNumber, this.searchType);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { loadStagger } from '../../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [loadStagger.loadStaggerTrigger],
})
export class HomeComponent implements OnInit, OnDestroy {
  movies = [];
  loadingResults = false;
  pageNumber: number = 1;
  searchType: string = 'now_playing';
  includeGenres: string = '';

  //
  private subscription: Subscription;

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.subscription = this.movieService
      .getMovies(this.pageNumber, this.searchType, this.includeGenres)
      .subscribe(
        (data: any) => {
          this.movies = data.results;
        },
        (err) => console.log('Recived error:', err),
        () => console.log('Complete!')
      );
    // this.fetchMovieResults(
    //   this.pageNumber,
    //   this.searchType,
    //   this.includeGenres
    // );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('SUB IS DEAD');
  }

  fetchMovieResults(page, searchType, genresIncluded) {
    this.movieService.getMovies(page, searchType, genresIncluded).subscribe(
      (data) => console.log('Recived data:', data),
      (err) => console.log('Recived error:', err),
      () => console.log('Complete!')
    );
    // .subscribe((data: any) => {
    //   this.movies = data.results;
    //   console.log(this.movies);
    // });
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
    if (!this.loadingResults) {
      this.loadingResults = true;
      this.pageNumber++;
      this.loadMoreMovies(this.pageNumber, this.searchType, this.includeGenres);
    }
  }
}

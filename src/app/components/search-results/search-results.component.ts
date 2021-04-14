import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadStagger } from 'src/app/animations';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  query: any;
  queryType: string;
  mediaType: string;
  pageNumber: number = 1;
  //// DATA
  searchResultsArray = [];

  public data: string = '1245';

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.query = params.query;
      this.queryType = params.queryType;
      this.mediaType = params.mediaType;
      console.log(params);

      if (this.queryType === 'query') {
        this.getMovieByQuery(this.query, this.pageNumber);
      }
      if (this.queryType === 'id' && this.mediaType === 'movie') {
        this.getMovieById(this.query, this.pageNumber);
      }
      if (this.queryType === 'id' && this.mediaType === 'tv') {
        this.getTvById(this.query, this.pageNumber);
      }
      if (this.queryType === 'id' && this.mediaType === 'person') {
        this.getActorById(this.query);
      }
    });
  }

  getMovieByQuery(query, pageNumber) {
    this.movieService
      .searchForMovieByQuery(query, pageNumber)
      .subscribe((data: any) => {
        this.searchResultsArray = new Array(data);
      });
  }
  getMovieById(movieId, pageNumber) {
    this.movieService
      .searchForMovieById(movieId, pageNumber)
      .subscribe((data: any) => {
        this.searchResultsArray = new Array({
          page: 1,
          results: [data],
          total_pages: 1,
          total_results: 1,
        });
      });
  }
  getTvById(tvId, pageNumber) {
    this.movieService
      .searchForTVById(tvId, pageNumber)
      .subscribe((data: any) => {
        this.searchResultsArray = new Array({
          page: 1,
          results: [data],
          total_pages: 1,
          total_results: 1,
        });
      });
  }
  getActorById(actorId) {
    this.movieService.searchForActorById(actorId).subscribe((data: any) => {
      this.searchResultsArray = new Array({
        page: 1,
        results: [data],
        total_pages: 1,
        total_results: 1,
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { faUser, faFilm, faTv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchInput: string = '';
  recomendations = [];
  faFilm = faFilm;
  faTv = faTv;
  faUser = faUser;

  public urlParams;

  constructor(
    private movieService: MoviesService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    console.log(this.urlParams, 'its me');
  }

  // FUNCTIONS
  updateSearchString() {
    if (this.searchInput.length === 0) {
      this.recomendations = [];
    } else {
      this.searchForMovie(this.searchInput);
    }
  }

  searchForMovie(searchString) {
    this.movieService
      .searchForMovieByQuery(searchString, 1)
      .subscribe((data: any) => {
        this.recomendations = data.results.slice(0, 10);
        console.log(this.recomendations);
      });
  }

  routeSearch() {
    this.route.navigate([`results/query/allMedia/${this.searchInput}`]);
    this.recomendations = [];
    this.searchInput = '';
  }

  idSearch(movieID, mediaType) {
    this.route.navigate([`results/id/${mediaType}/${movieID}`]);
    this.recomendations = [];
    this.searchInput = '';
  }
}

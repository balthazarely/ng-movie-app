import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  public id: string;
  public mediaType: string;
  movieDetails: [];

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      this.mediaType = params.mediaType;
      this.loadMediaDetails(this.id);
    });
  }

  loadMediaDetails(id) {
    // if (this.mediaType === 'movie') {
    this.movieService.getMovie(id).subscribe((data: any) => {
      this.movieDetails = data;
      console.log(this.movieDetails);
    });
    // }
    // if (this.mediaType === 'tv') {
    //   this.movieService.getShow(id).subscribe((data: any) => {
    //     this.movieDetails = data;
    //     console.log(this.movieDetails);
    //   });
    // }
  }
}

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
  movieDetails: [];

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadMovieDetails(this.id);
  }

  loadMovieDetails(id) {
    this.movieService.getMovie(id).subscribe((data: any) => {
      this.movieDetails = data;
      console.log(this.movieDetails);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
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
      this.loadTvdDetails(this.id);
    });
  }

  loadTvdDetails(id) {
    this.movieService.getShow(id).subscribe((data: any) => {
      this.movieDetails = data;
      console.log(this.movieDetails);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss'],
})
export class ActorComponent implements OnInit {
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
      this.loadActorDetails(this.id);
    });
  }

  loadActorDetails(id) {
    this.movieService.getActor(id).subscribe((data: any) => {
      this.movieDetails = data;
      console.log(this.movieDetails);
    });
  }
}

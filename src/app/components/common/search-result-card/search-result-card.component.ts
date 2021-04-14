import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss'],
})
export class SearchResultCardComponent implements OnInit {
  @Input() movies?;

  ngOnInit() {
    console.log(this.movies);
  }
}

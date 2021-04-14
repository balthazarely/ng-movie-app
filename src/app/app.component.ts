import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [slideInAnimation],
})
export class AppComponent {
  data: string;

  constructor() {} // private activatedRoute: ActivatedRoute

  // ngOnInit() {
  //   // this.activatedRoute.params.subscribe((routeParams) => {
  //   //   console.log(routeParams);
  //   // });
  //   this.service.data$.subscribe((res) => (this.data = res)); //read the invoked data or default data
  // }
}

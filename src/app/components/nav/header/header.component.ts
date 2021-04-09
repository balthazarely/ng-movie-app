import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navOpen: boolean = false;

  constructor(private router: Router) {}

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  goToRoute(genre?: string): void {
    this.router.navigate([`/genres/${genre}`]);
  }
}

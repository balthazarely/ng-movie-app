import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}

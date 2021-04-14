import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  navOpen: boolean = false;
  isAuth: boolean = false;
  authSubscription: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  goToRoute(genre?: string): void {
    this.router.navigate([`/genres/${genre}`]);
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}

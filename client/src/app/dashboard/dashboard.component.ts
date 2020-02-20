import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from  '../model/user';
import {  AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}

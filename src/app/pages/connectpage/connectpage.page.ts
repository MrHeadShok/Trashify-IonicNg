import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connectpage',
  templateUrl: './connectpage.page.html',
  styleUrls: ['./connectpage.page.scss'],
})
export class ConnectpagePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  toSignup() {
    this.router.navigate([`signup`]);
  }

  toLogin() {
    this.router.navigate([`login`]);
  }
}

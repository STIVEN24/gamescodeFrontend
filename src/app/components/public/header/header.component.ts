import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { myTransition } from '../../../helpers/route-animations.helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    myTransition
  ]
})
export class HeaderComponent implements OnInit {

  pageLoaded: boolean = true;
  removePageLoaded: boolean = true;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.pageLoaded = false
    }, 1000);
    setTimeout(() => {
      this.removePageLoaded = false
    }, 4000);

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}

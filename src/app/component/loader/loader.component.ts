import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, NavigationCancel, NavigationError, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  showLoadingIndicator = true;
  constructor(

    private _router: Router,
    private route: ActivatedRoute,
    private router: Router,

  ) {
/*
    this._router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {

        this.showLoadingIndicator = true

      } else if (routerEvent instanceof NavigationEnd ){
        debugger;

        setTimeout(() => {
          this.showLoadingIndicator = false
        }, 100000);




      }

    });*/

  }

  ngOnInit() {

    setTimeout(() => {
      this.router.navigate(['/item']);
    }, 3000);

  }



}

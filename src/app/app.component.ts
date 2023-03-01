import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'radar-pc';
  date = Date.now();

  constructor (public router: Router) {}

  navigateTo (route: string) {
    this.router.navigate([route]).then(r => {console.log(r);});
  }

}

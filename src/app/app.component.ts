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
  activeLinkIndex = -1;
  navLinks: any[] = [];

  constructor (public router: Router) {
    this.navLinks = [
      {
        label: '首页监测',
        link: './home',
        index: 0
      },
      {
        label: '用户数据',
        link: './data',
        index: 1
      },
      {
        label: '预警中心',
        link: './warn',
        index: 2
      },
      {
        label: '设备配置',
        link: './equipment',
        index: 3
      },
    ];
  }

  ngOnInit (): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  navigateTo (route: string) {
    this.router.navigate([route]).then(r => {console.log(r);});
  }

}

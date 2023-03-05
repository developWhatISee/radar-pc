import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search (e: MouseEvent){
    e.preventDefault();
    alert('点击了查询按钮');
  }

  reset (e: MouseEvent) {
    e.preventDefault();
    alert('点击了重置按钮');
  }
}

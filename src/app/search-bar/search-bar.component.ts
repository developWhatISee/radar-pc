import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchEvent = new EventEmitter();
  @Output() resetEvent = new EventEmitter();

  formGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  search(event: Event): void {
    this.searchEvent.emit(this.formGroup.value);
  }

  reset(event: Event): void {
    this.formGroup.reset();
    this.resetEvent.emit();
  }
}

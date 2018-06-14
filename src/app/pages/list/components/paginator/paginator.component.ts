import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LIMIT } from '../../../../def/constants';

@Component({
  selector: 'pok-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass'],
})

export class PaginatorComponent implements OnInit {
  constructor() {}
  @Input()
  private page: number

  @Input()
  private totalPage: number;

  @Output()
  private changePage: EventEmitter<number> = new EventEmitter<number>();

  next(ev) {
    console.log(ev.target)
    if (ev.target.classList.contains('disabled')) {
      return
    }
    this.changePage.emit((this.page) * LIMIT)
  }

  prev(ev) {
    console.log(ev.target)
    if (ev.target.classList.contains('disabled')) {
      return
    }
    this.changePage.emit((this.page - 1) * LIMIT - LIMIT)
  }

  first() {
    //TODO:
  }

  last() {
    //TODO:
  }

  ngOnInit() {}
}

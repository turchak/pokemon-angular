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
  page: number;

  @Input()
  totalPage: number;

  @Output()
  changePage: EventEmitter<number> = new EventEmitter<number>();

  GoNext(ev) {
    if (ev.target.classList.contains('disabled')) {
      return
    }
    this.changePage.emit(this.page * LIMIT)
  }

  GoPrev(ev) {
    if (ev.target.classList.contains('disabled')) {
      return
    }
    this.changePage.emit((this.page - 1) * LIMIT - LIMIT)
  }

  GoFirst(ev) {
    if (ev.target.classList.contains('disabled')) {
      return
    }
    this.changePage.emit()
  }

  GoLast(ev) {
    if (ev.target.classList.contains('disabled')) {
      return
    }
    this.changePage.emit((this.totalPage - 1) * LIMIT)
  }

  ngOnInit() {
  }
}

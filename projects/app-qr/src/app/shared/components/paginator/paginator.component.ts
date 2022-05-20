import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'projects/app-qr/src/environments/environment';

@Component({
  selector: 'qr-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();
  @Input() length!: number;
  pageSize = environment.PAGE_SIZE;
  currentPage = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex ?? event.value;
    this.onChangePage.emit(this.currentPage);
  }
}

import { Component, ContentChildren, Input, OnInit, Output, QueryList, SimpleChanges, ViewChild, EventEmitter } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { TableUtil } from '../../Classes/TableUtil';
import { MetaDataColumn } from '../../Interfaces/metacolumn.interface';
interface IData {
  id: number;
  agency: string;
}
@Component({
  selector: 'qr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() metaDataColumns!: MetaDataColumn[];
  columns: String[] = [];
  @ContentChildren(MatColumnDef, { descendants: true }) columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @Output() onExportTable: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaDataColumns']) {
      this.columns = this.metaDataColumns.map((md) => md.field);
    }


  }
  ngAfterContentInit() {
    if (!this.columnsDef) {
      return;
    }
    this.columnsDef.forEach(columnsDef => {
      this.columns.push(columnsDef.name);
      this.table.addColumnDef(columnsDef)

    });
  }


}

import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
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
  // data: IData[]=[
  //   {id: 1,agency: 'Ambato'},
  //   {id: 2,agency: 'Quito'},
  //   {id: 3,agency: 'Riobamba'},
  //   {id: 4,agency: 'Guyaquil'},
  //   {id: 5,agency: 'Cuenca'},
  // ];
  // listFields: string[] =[
  //   'id', 'agency'
  // ];
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

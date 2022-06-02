import { Component, Inject, Input, OnInit } from '@angular/core';
import { TableUtil } from '../../Classes/TableUtil';

@Component({
  selector: 'qr-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor() {

  }
  exportDataExcel!: [any[], string];
  exportDataPDF!: [string[], any[], string];
  ngOnInit(): void {
  }
  export() {

  }
  ExportTableToExcel() {

    TableUtil.exportArrayToExcel(...this.exportDataExcel)
  }
  ExportTableToPDF() {

    TableUtil.exportTableToPDF(...this.exportDataPDF);
  }
}

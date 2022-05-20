import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/Interfaces/metacolumn.interface';

@Component({
  selector: 'qr-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data: any[] = [
    { id: '1', canal: 'Correo', descripcion: 'Quejas y Reclamos por medio de correo electrónico' },
    { id: '2', canal: 'Teléfono', descripcion: 'Quejas y Reclamos por teléfono' },
    { id: '3', canal: 'Redes Sociales', descripcion: 'Quejas y Reclamos por Redes Sociales' },
  ];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'canal', title: 'CANAL' },
    { field: 'descripcion', title: 'DESCRIPCION' }
  ];

  listFields: string[] = this.data.length > 0 ? Object.keys(this.data[0]) : ['No Data Available'];
}

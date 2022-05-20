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
data: any []=[
{cedula:'1801', nombre:'José',apellido:'Pazmiño', fecha:'03-03-1999', celular:'0995668401',correo:'pepe.paz0399@gmail.com'},
{cedula:'1802', nombre:'Alex',apellido:'Tigselema', fecha:'02-02-1999', celular:'0995668401',correo:'alex.tigsilema@gmail.com'},
{cedula:'1803', nombre:'Jeniffer',apellido:'Yaguana', fecha:'04-04-1999', celular:'0995668401',correo:'china.yaguana@gmail.com'},
];
metaDataColumns: MetaDataColumn[] = [
  { field: 'cedula', title: 'ID' },
  { field: 'nombre', title: 'NOMBRE' },
  { field: 'apellido', title: 'APELLIDO' },
  { field: 'fecha', title: 'FECHA DE NACIMIENTO' },
  { field: 'celular', title: 'CELULAR' },
  { field: 'correo', title: 'CORREO' }
];

listFields: string[] = this.data.length > 0 ? Object.keys(this.data[0]) : ['No Data Available'];
}

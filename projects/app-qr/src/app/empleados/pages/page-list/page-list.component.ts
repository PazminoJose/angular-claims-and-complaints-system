import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/Interfaces/metacolumn.interface';

@Component({
  selector: 'qr-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {


  ngOnInit(): void {
  }
  data: any[] = [
    { cedula: '1802', nombre: 'Juanito', apellido: 'Alcachofa', cargo: 'Administrador', correo: 'juanitoelalcachofa@alcachofa.com' },
    { cedula: '1803', nombre: 'Jhoel', apellido: 'Puetate', cargo: 'Empleado', correo: 'ppueta@gmail.com' },
    { cedula: '1804', nombre: 'Kevin', apellido: 'Suakez', cargo: 'Empleado', correo: 'juanitoelalcachofa@alcachofa.com' },
  ];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'cedula', title: 'ID' },
    { field: 'nombre', title: 'NOMBRE' },
    { field: 'apellido', title: 'APELLIDO' },
    { field: 'cargo', title: 'CARGO' },
    { field: 'correo', title: 'CORREO' }
  ];
  listFields: string[] = this.data.length > 0 ? Object.keys(this.data[0]) : ['No Data Available'];
}

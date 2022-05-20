import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'projects/app-qr/src/environments/environment';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { KeypadButton } from '../../../shared/Interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/Interfaces/metacolumn.interface';
import { DownloadComponent } from '../../../shared/components/download/download.component';

@Component({
  selector: 'qr-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  recordsAgency: any[] = [
    { id: 1, agency: 'Ambato', address: 'Calle A', },
    { id: 2, agency: 'Quito', address: 'Calle B', },
    { id: 3, agency: 'Riobamba', address: 'Calle C', },
    { id: 4, agency: 'Guyaquil', address: 'Calle D', },
    { id: 5, agency: 'Cuenca', address: 'Calle D', },
    { id: 6, agency: 'Ambato', address: 'Calle A', },
    { id: 7, agency: 'Quito', address: 'Calle B', },
    { id: 8, agency: 'Riobamba', address: 'Calle C', },
    { id: 9, agency: 'Guyaquil', address: 'Calle D', },
    { id: 10, agency: 'Cuenca', address: 'Calle D', },
    { id: 11, agency: 'Ambato', address: 'Calle A', },
    { id: 12, agency: 'Quito', address: 'Calle B', },
    { id: 13, agency: 'Riobamba', address: 'Calle C', },
    { id: 14, agency: 'Guyaquil', address: 'Calle D', },
    { id: 15, agency: 'Cuenca', address: 'Calle D', },
    { id: 16, agency: 'Ambato', address: 'Calle A', },
    { id: 17, agency: 'Quito', address: 'Calle B', },
    { id: 18, agency: 'Riobamba', address: 'Calle C', },
    { id: 19, agency: 'Guyaquil', address: 'Calle D', },
    { id: 20, agency: 'Cuenca', address: 'Calle D', },
    { id: 21, agency: 'Ambato', address: 'Calle A', },
    { id: 22, agency: 'Quito', address: 'Calle B', },
    { id: 23, agency: 'Riobamba', address: 'Calle C', },
    { id: 24, agency: 'Guyaquil', address: 'Calle D', },
    { id: 25, agency: 'Cuenca', address: 'Calle D', },
    { id: 26, agency: 'Ambato', address: 'Calle A', },
    { id: 27, agency: 'Quito', address: 'Calle B', },
    { id: 28, agency: 'Riobamba', address: 'Calle C', },
    { id: 29, agency: 'Guyaquil', address: 'Calle D', },
    { id: 40, agency: 'Cuenca', address: 'Calle D', },
    { id: 41, agency: 'Ambato', address: 'Calle A', },
    { id: 42, agency: 'Quito', address: 'Calle B', },
    { id: 43, agency: 'Riobamba', address: 'Calle C', },
    { id: 44, agency: 'Guyaquil', address: 'Calle D', },
    { id: 45, agency: 'Cuenca', address: 'Calle D', },
    { id: 46, agency: 'Ambato', address: 'Calle A', },
    { id: 47, agency: 'Quito', address: 'Calle B', },
    { id: 48, agency: 'Riobamba', address: 'Calle C', },
    { id: 49, agency: 'Guyaquil', address: 'Calle D', },
    { id: 50, agency: 'Cuenca', address: 'Calle D', },
  ];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'agency', title: 'AGENCIA' },
    { field: 'address', title: 'DIRECCION' }
  ];
  dataAgency: any[] = [];
  totalRecords: number = this.recordsAgency.length;
  keypadButtons: KeypadButton[] = [
    { icon: 'cloud_download', tooltip: 'EXPORTAR', color: 'accent', action: 'DOWNLOAD' },
    { icon: 'add', tooltip: 'AGREGAR', color: 'primary', action: 'NEW' }
  ];

  //Constructor***********************************************************
  constructor(private dialog: MatDialog, private snackbar: MatSnackBar, private bottmSheet: MatBottomSheet) {
    this.changePage(0);

  }
  //**********************************************************************/
  ngOnInit(): void {
  }
  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.dataAgency = this.recordsAgency.slice(skip, skip + pageSize);
  }
  openForm(row: any = null) {

  }
  delete(id: number) {
    const reference: MatDialogRef<ConfirmComponent> = this.dialog.open(ConfirmComponent, { width: '320px', disableClose: true });
    reference.componentInstance.message = "¿Esta seguro que desea eliminar la agencia?";
    reference.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      const position = this.recordsAgency.findIndex(el => el.id === id);
      this.recordsAgency.splice(position, 1);
      this.changePage(0);
      this.showMessage("Eliminado correctamente");
    })

  }
  showMessage(message: string, duration: number = 2000) {
    this.snackbar.open(message, '', { duration });
  }
  doAction(action: string) {
    switch (action) {
      case 'DOWNLOAD':
        this.showBottomSheet("Lista de Afencias", "agencias", this.dataAgency);
        break;
      case 'NEW':
      default:
        this.openForm();
        break;
    }
  }
  showBottomSheet(title: string, fileName: string, data: any) {
    this.bottmSheet.open(DownloadComponent);
  }
}

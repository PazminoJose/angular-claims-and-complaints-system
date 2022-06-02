import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TittleComponent } from './tittle/tittle.component';
import { ContainerComponent } from './container/container.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DownloadComponent } from './components/download/download.component';
import { MatListModule } from '@angular/material/list';
import {CustomPaginator} from './config/paginator.config';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}

@NgModule({
  declarations: [
    TittleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    ConfirmComponent,
    KeypadButtonComponent,
    DownloadComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatBottomSheetModule
  ],
  exports: [
    TittleComponent,
    ContainerComponent,
    TableComponent,
    PerfectScrollbarModule,
    PaginatorComponent,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    ConfirmComponent,
    MatDialogModule,
    MatSnackBarModule,
    KeypadButtonComponent,
    MatTooltipModule,
    DownloadComponent,
    MatToolbarModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ]
})
export class SharedModule { }

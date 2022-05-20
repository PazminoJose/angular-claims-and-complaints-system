import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuejasReclamosRoutingModule } from './quejas-reclamos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    QuejasReclamosRoutingModule,
    SharedModule
  ]
})
export class QuejasReclamosModule { }

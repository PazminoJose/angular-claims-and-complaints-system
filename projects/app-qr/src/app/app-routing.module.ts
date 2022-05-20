import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';


const routes: Routes = [
  {
    path: '',
    component: PageLoginComponent
  },
  {
    path: 'agencias',
    loadChildren: ()=>import('./agencias/agencias.module').then((m)=>m.AgenciasModule)
  },
  {
    path: 'clientes',
    loadChildren: ()=>import('./clientes/clientes.module').then((m)=>m.ClientesModule) 
  },
  {
    path: 'empleados',
    loadChildren: ()=>import('./empleados/empleados.module').then((m)=>m.EmpleadosModule) 
  },
  {
    path: 'canales',
    loadChildren: ()=>import('./canales/canales.module').then((m)=>m.CanalesModule) 
  },
  {
    path: 'qr',
    loadChildren: ()=>import('./quejas-reclamos/quejas-reclamos.module').then((m)=>m.QuejasReclamosModule) 
  },
  {
    path: 'seguimiento',
    loadChildren: ()=>import('./seguimiento/seguimiento.module').then((m)=>m.SeguimientoModule) 
  }, {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
export interface IMenu {
  title: string;
  url: string;
  icon: string;
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu: IMenu[] = [
    { title: 'Agencias', url: '/agencias', icon: '/assets/icons/agencia.svg' },
    { title: 'Canales', url: '/canales', icon: '/assets/icons/canal.svg' },
    { title: 'Clientes', url: '/clientes', icon: '/assets/icons/client.svg' },
    { title: 'Empleados', url: '/empleados', icon: '/assets/icons/empleado.svg' },
    { title: 'Quejas y Reclamos', url: '/qr', icon: '/assets/icons/qr.svg' },
    { title: 'Seguiemiento', url: '/seguimiento', icon: '/assets/icons/seguimiento.svg' }
  ]
  constructor() { }

  getMenu(): IMenu[] {
    // Clonar elementos que contegan rutas para prevenir ataques.
    return [...this.listMenu];
  }

  getMenuByUrl(url: string): IMenu{
    return this.listMenu.find(menu => menu.url.toLowerCase() === url.toLowerCase()) as IMenu;
  }
}

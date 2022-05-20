import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu, MenuService } from '../../services/menu.service';


@Component({
  selector: 'qr-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.css']
})
export class TittleComponent implements OnInit {
  path: IMenu;
  constructor(
    private menuService: MenuService,
    private activateRoute: ActivatedRoute) {
    const currentPath = '/' + this.activateRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.path = menuService.getMenuByUrl(currentPath);
  }

  ngOnInit(): void {
  }

}

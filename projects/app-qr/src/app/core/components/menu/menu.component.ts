import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenu, MenuService } from './../../../services/menu.service';


@Component({
  selector: 'qr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() onToggleExpandedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  listMenu: IMenu[];
  url = '';
  expanded = true;
  constructor(private menuService: MenuService) {
    this.listMenu = menuService.getMenu();
  }

  ngOnInit(): void {
  }
  toggleExpanded() {
    this.expanded = !this.expanded;
    this.onToggleExpandedEvent.emit(this.expanded);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'qr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appQr';
  expanded = true;

  toggleExpanded(expanded: boolean){
    this.expanded = expanded;

  }
}

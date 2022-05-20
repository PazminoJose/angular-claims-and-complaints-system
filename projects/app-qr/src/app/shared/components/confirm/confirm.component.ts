import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qr-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  message = "¿Desea eliminar el elemento?";
  constructor() { }

  ngOnInit(): void {
  }

}

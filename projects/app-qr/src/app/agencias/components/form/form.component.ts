import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'qr-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  title!: string;
  group!: FormGroup;
  constructor(private reference: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data ? 'EDITAR' : 'NUEVO';
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?._id),
      name: new FormControl(this.data?.name, Validators.required),
      address: new FormControl(this.data?.address, Validators.required)
    });
  }
  ngOnInit(): void {
    this.loadForm();
  }
  save() {
    const record = this.group.value;
    this.reference.close(record);
  }

}

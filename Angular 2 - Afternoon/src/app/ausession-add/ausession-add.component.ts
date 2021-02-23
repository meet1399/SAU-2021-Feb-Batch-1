import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuSession } from '../modal/ausession';
import { AuSessionService } from '../ausession.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AusessionListComponent } from '../ausession-list/ausession-list.component';

@Component({
  selector: 'app-ausession-add',
  templateUrl: './ausession-add.component.html',
  styleUrls: ['./ausession-add.component.scss']
})
export class AusessionAddComponent implements OnInit {


  ausessionForm:FormGroup;
  constructor(private ausessionService:AuSessionService, private dialogRef:MatDialogRef<AusessionListComponent>) { }

  ngOnInit(): void {
    this.ausessionForm = new FormGroup({
      session : new FormControl('', Validators.required),
      instructor : new FormControl('', Validators.required),
      desc: new FormControl('')
    });
  }

  get session() {
    return this.ausessionForm.get('session') as FormControl;
  }

  get instructor() {
    return this.ausessionForm.get('instructor') as FormControl;
  }

  get desc() {
    return this.ausessionForm.get('desc') as FormControl;
  }

  addToList() {
    const ausession:AuSession = {
      session : this.session.value,
      instructor : this.instructor.value,
      desc : this.desc.value
    }
    this.ausessionService.addAuSession(ausession);
    this.dialogRef.close();
  }

}
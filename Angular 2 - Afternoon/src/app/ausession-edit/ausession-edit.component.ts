import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuSession } from '../modal/ausession';
import { AuSessionService } from '../ausession.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AusessionListComponent } from '../ausession-list/ausession-list.component';

@Component({
  selector: 'app-ausession-edit',
  templateUrl: './ausession-edit.component.html',
  styleUrls: ['./ausession-edit.component.scss']
})
export class AusessionEditComponent implements OnInit {
  ausessionForm : FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {session: string,instructor:string,desc:string,index:number}, 
            private ausessionService: AuSessionService, private dialogRef:MatDialogRef<AusessionListComponent>) { }

  ngOnInit(): void {
    this.ausessionForm = new FormGroup({
      session : new FormControl(this.data.session, Validators.required),
      instructor : new FormControl(this.data.instructor, Validators.required),
      desc : new FormControl(this.data.desc)
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

  editValue(){
    const ausession:AuSession = {
      session : this.session.value,
      instructor: this.instructor.value,
      desc : this.desc.value
    }
    this.ausessionService.editAuSession(this.data.index, ausession);
    this.dialogRef.close();
  }
  

}

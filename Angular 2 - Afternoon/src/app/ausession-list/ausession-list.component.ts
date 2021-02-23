import { Component, OnInit } from '@angular/core';
import { AuSession } from '../modal/ausession';
import { AuSessionService } from '../ausession.service';
import { MatDialog } from '@angular/material/dialog';
import { AusessionAddComponent } from '../ausession-add/ausession-add.component';
import { AusessionEditComponent } from '../ausession-edit/ausession-edit.component';

@Component({
  selector: 'app-ausession-list',
  templateUrl: './ausession-list.component.html',
  styleUrls: ['./ausession-list.component.scss']
})
export class AusessionListComponent implements OnInit {

  ausessionItems: AuSession[] = []

  constructor(private ausessionService:AuSessionService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.ausessionItems = this.ausessionService.getAuSessions();
  }

  addAuSession() {
    this.dialog.open(AusessionAddComponent, {
      width:'300px'
    });
  }

  editAuSession(i:number){
    this.dialog.open(AusessionEditComponent, {
      width:'300px',
      data: { session: this.ausessionService.ausessionItems[i].session, 
              instructor: this.ausessionService.ausessionItems[i].instructor,
              description: this.ausessionService.ausessionItems[i].desc,
              index:i
           },
      
    });
  }

  deleteAuSession(i:number) {
    this.ausessionService.deleteAuSession(i);
  }
}

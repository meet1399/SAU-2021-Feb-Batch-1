import { Injectable } from '@angular/core';
import { AuSession } from './modal/ausession';

@Injectable({
  providedIn: 'root'
})
export class AuSessionService {

  ausessionItems: AuSession[] = [
    {
      session: 'Javascript',
      instructor:'Rahul Pareek',
      desc: 'Session on Javascript taken on date 12-Feb-2021 '
    },
    {
      session: 'NoSQL Basics',
      instructor:'Abhisek Nandan',
      desc: 'Concepts of NoSQL and Couchbase taken on date 15-Feb-2021'
    },
    {
      session: 'HTML CSS',
      instructor:'Chandan Chanda',
      desc: 'Basics of HTML 5 and CSS 3 covered on date 15-Feb-2021'
    },
    {
      session: 'Angular 1',
      instructor:'Raviteja V',
      desc: 'Angular 1 concepts taken on date 16-Feb-2021'
    }
  ]

  constructor() { }

  getAuSessions() {
    return this.ausessionItems;
  }

  addAuSession(ausession:AuSession) {
    this.ausessionItems.push(ausession);
  }

  deleteAuSession(index:number){
    this.ausessionItems.splice(index,1);
  }

  editAuSession(index:number,ausession:AuSession){
    this.ausessionItems[index].session=ausession.session;
    this.ausessionItems[index].instructor=ausession.instructor;
    this.ausessionItems[index].desc=ausession.desc;    
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusessionListComponent } from './ausession-list.component';

describe('AusessionListComponent', () => {
  let component: AusessionListComponent;
  let fixture: ComponentFixture<AusessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusessionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusessionEditComponent } from './ausession-edit.component';

describe('AusessionEditComponent', () => {
  let component: AusessionEditComponent;
  let fixture: ComponentFixture<AusessionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusessionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusessionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

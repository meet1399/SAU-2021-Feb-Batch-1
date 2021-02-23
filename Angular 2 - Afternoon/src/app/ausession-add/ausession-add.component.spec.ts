import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusessionAddComponent } from './ausession-add.component';

describe('AusessionAddComponent', () => {
  let component: AusessionAddComponent;
  let fixture: ComponentFixture<AusessionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusessionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusessionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

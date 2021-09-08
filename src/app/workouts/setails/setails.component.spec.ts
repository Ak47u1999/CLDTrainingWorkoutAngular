import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetailsComponent } from './setails.component';

describe('SetailsComponent', () => {
  let component: SetailsComponent;
  let fixture: ComponentFixture<SetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

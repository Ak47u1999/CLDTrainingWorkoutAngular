import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArnoldWorkoutComponent } from './arnold-workout.component';

describe('ArnoldWorkoutComponent', () => {
  let component: ArnoldWorkoutComponent;
  let fixture: ComponentFixture<ArnoldWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArnoldWorkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArnoldWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

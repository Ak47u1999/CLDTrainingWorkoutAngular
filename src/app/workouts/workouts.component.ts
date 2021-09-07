import { Component, OnInit } from '@angular/core';
import { Workouts } from '../Models/WorkoutModel';
import { GlobalTableService } from '../Services/global-table.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  CopiedWorkouts : Workouts[]=[];

  constructor(public service : GlobalTableService){
    this.CopiedWorkouts=this.service.WorkoutList.copyWithin(0,0,this.service.WorkoutList.length-1);
  }

  ngOnInit(): void {
  }

}

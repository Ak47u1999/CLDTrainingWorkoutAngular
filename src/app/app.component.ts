import { Component } from '@angular/core';
import { Workouts } from './Models/WorkoutModel';
import { GlobalTableService } from './Services/global-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CLDTrainingWorkout';

}

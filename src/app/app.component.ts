import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Workouts } from './Models/WorkoutModel';
import { GlobalTableService } from './Services/global-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CLDTrainingWorkout';
  searchParameter?:string;
  url :string="https://www.google.com/search?q=";

  onNavigate(){
    this.url+=this.searchParameter;
    window.open(this.url, "_blank");
  }
}

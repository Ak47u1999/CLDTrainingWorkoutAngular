import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArnoldWorkoutComponent } from './arnold-workout/arnold-workout.component';
import { SoldOutComponent } from './sold-out/sold-out.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DeleteComponent } from './workouts/delete/delete.component';
import { SetailsComponent } from './workouts/setails/setails.component';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [

  {path: 'WorkoutDetails', component: SetailsComponent},
  {path: 'WorkoutDelete', component: DeleteComponent},
  {path: 'Workouts', component:WorkoutsComponent},
  {path: 'ArnoldWorkouts', component:ArnoldWorkoutComponent},
  {path: 'WelcomeDetails', component:WelcomeComponent},
  {path: 'SoldOutMessage', component:SoldOutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

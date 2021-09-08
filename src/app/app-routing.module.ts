import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './workouts/delete/delete.component';
import { SetailsComponent } from './workouts/setails/setails.component';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [

  {path: 'WorkoutDetails', component: SetailsComponent},
  {path: 'WorkoutDelete', component: DeleteComponent},
  {path: 'Workouts', component:WorkoutsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

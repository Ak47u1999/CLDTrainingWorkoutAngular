import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { SetailsComponent } from './workouts/setails/setails.component';
import { DeleteComponent } from './workouts/delete/delete.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArnoldWorkoutComponent } from './arnold-workout/arnold-workout.component';
import { SoldOutComponent } from './sold-out/sold-out.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    SetailsComponent,
    DeleteComponent,
    WelcomeComponent,
    ArnoldWorkoutComponent,
    SoldOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

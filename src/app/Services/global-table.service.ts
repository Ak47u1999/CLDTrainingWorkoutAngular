import { Injectable } from '@angular/core';
import { Workouts } from '../Models/WorkoutModel';

@Injectable({
  providedIn: 'root'
})
export class GlobalTableService {

  // MuscleGroup : string
  // ExerciseName : string
  // SetsNum : number
  // RepsNum : number
  // Split : string

  WorkoutList : Workouts[]=[
  {
    MuscleGroup :'Grand Deltoid Anterior',
  ExerciseName : 'Military Press',
  SetsNum : 4,
  RepsNum : 12,
  Split : 'Push Pull legs'},
  {
    MuscleGroup :'Quadriceps',
  ExerciseName : 'The Squat',
  SetsNum : 4,
  RepsNum : 8,
  Split : 'Push Pull legs'},
  {
    MuscleGroup :'Lats',
  ExerciseName : 'Wide Angle Lat pulldown',
  SetsNum : 6,
  RepsNum : 10,
  Split : 'Upper Lower'},
  {
    MuscleGroup :'Pecs',
  ExerciseName : 'Cable crossover',
  SetsNum : 4,
  RepsNum : 12,
  Split : 'Bro'}

  ];
  
  constructor() { }
}

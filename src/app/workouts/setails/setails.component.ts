import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-setails',
  templateUrl: './setails.component.html',
  styleUrls: ['./setails.component.css']
})
export class SetailsComponent implements OnInit {

  @Input() parent2child?:string;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Pixelbox2Component } from '../pixelbox2/pixelbox2.component'

@Component({
  selector: 'app-pixelcontainer2',
  templateUrl: './pixelcontainer2.component.html',
  styleUrls: ['./pixelcontainer2.component.css']
})
export class Pixelcontainer2Component implements OnInit {
	@Input() numbers: any;
	@Input() timerStarted: any;

  	constructor() { }

  	ngOnInit() {}

}

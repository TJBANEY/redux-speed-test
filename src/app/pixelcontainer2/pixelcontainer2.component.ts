import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pixelcontainer2',
  templateUrl: './pixelcontainer2.component.html',
  styleUrls: ['./pixelcontainer2.component.css']
})
export class Pixelcontainer2Component implements OnInit {
	@Input() numbers: any;

  	constructor() { }

  	ngOnInit() {}

}

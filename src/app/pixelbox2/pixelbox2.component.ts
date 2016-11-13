import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pixelbox2',
  templateUrl: './pixelbox2.component.html',
  styleUrls: ['./pixelbox2.component.css']
})

export class Pixelbox2Component implements OnInit {
	@Input() numbers: any;

  	constructor() { }

	ngOnInit() {
  	}

}

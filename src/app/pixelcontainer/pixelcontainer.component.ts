import { Component, OnInit, Input } from '@angular/core';
import { PixelboxComponent } from '../pixelbox/pixelbox.component';

@Component({
  selector: 'app-pixelcontainer',
  templateUrl: './pixelcontainer.component.html',
  styleUrls: ['./pixelcontainer.component.css']
})
export class PixelcontainerComponent implements OnInit {
	@Input() numbers: any;
  @Input() timerStarted: any;
	boxColor: any;
  activePixels: any = [];

  	constructor() { }

  	ngOnInit() {

     }

  	colorPixel(data){
  	if (data % 100000 == 0){
		  var pixel = data/100000;
      this.activePixels.push(pixel);
  	}
  }

}

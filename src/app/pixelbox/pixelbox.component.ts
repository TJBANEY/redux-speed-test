import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { PixelComponent } from '../pixel/pixel.component';

@Component({
  selector: 'app-pixelbox',
  templateUrl: './pixelbox.component.html',
  inputs: ['numbers'],
  styleUrls: ['./pixelbox.component.css']
})
export class PixelboxComponent implements OnInit {
  @Output() addPixel: EventEmitter<any> = new EventEmitter<any>();
  @Input() timerStarted: any;

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.timerStarted == 'true'){
      this.addPixels();
    }
  }

  // Trigger this function somehow when timer button is pressed
  addPixels(){
  	var x = 1;
  	while(x != 132100000){ 
  		this.addPixel.emit(x);
  		x++;
  	}
  }

}

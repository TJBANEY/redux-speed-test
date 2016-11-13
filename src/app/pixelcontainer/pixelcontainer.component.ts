import { Component, OnInit, Input } from '@angular/core';
import { PixelboxComponent } from '../pixelbox/pixelbox.component';

@Component({
  selector: 'app-pixelcontainer',
  templateUrl: './pixelcontainer.component.html',
  styleUrls: ['./pixelcontainer.component.css']
})
export class PixelcontainerComponent implements OnInit {
	@Input() numbers: any;

  constructor() { }

  ngOnInit() {
  }

}

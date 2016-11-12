import { Component, OnInit } from '@angular/core';
import { PixelComponent } from '../pixel/pixel.component';

@Component({
  selector: 'app-pixelbox',
  templateUrl: './pixelbox.component.html',
  inputs: ['numbers'],
  styleUrls: ['./pixelbox.component.css']
})
export class PixelboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

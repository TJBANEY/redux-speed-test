import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel',
  templateUrl: './pixel.component.html',
  inputs: ['numbers'],
  styleUrls: ['./pixel.component.css']
})

export class PixelComponent {

  constructor() { }

  getClass(){
  	console.log('HEY!')
  }

}

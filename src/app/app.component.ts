import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
});

export class AppComponent {
  numbers: any;
  ticks: number = 0;
  timerStarted: string = 'false';

  constructor() {
  	this.numbers = Array(1320).fill().map((x,i)=>i);
  }

  toggleStart(){
    console.log('XXX')
  }

  startTimer(){
    let timer = Observable.timer(1000,10);
    timer.subscribe(t=>this.ticks = (t/100).toFixed(2));

    this.timerStarted = 'true';
  }

}

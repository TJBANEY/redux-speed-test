import {Component, OnInit, Inject} from '@angular/core';
import {PixelActions} from './ActionCreator'

@Component({
	selector: 'test',
	template: `
  		<div>
   			<button (click)="addPixel(1)">Add todo</button>
   			<button (click)="getPixelState()">Get State</button>
  		</div>
		`
})

export class TestComponent implements OnInit {
	pixelStore: any;
	pixelActions: any;
	id: number = 1;
	pixels: any = [];
	unsubscribe: any;

	constructor(@Inject('PixelStore') pixelStore: any, 
		pixelActions: PixelActions){
			this.pixelStore = pixelStore;
   			this.pixelActions = pixelActions;

   			this.unsubscribe = this.pixelStore.subscribe(function listener(){
		      let state = this.pixelStore.getState();
		      this.pixels = state.pixels;
		    });
		}

	ngOnInit(){

	}

	private getPixelState(){
		console.log(this.pixels);
		console.log('HELLO');
		let state = this.pixelStore.getState();
  		this.pixels = state.pixels;
		console.log(this.pixels);
	}

	private addPixel(input) {
	   	this.pixelStore.dispatch(this.pixelActions.addPixel(input));
 	}
};
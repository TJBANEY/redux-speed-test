import {Component, OnInit, Inject} from '@angular/core';
import {PixelActions} from './ActionCreator'

@Component({
	selector: 'test',
	template: `
  		<div>
   			<button (click)="addPixel(1)">Add todo</button>
  		</div>
		`
})

export class TestComponent implements OnInit {
	pixelStore: any;
	pixelActions: any;
	id: number = 1;

	constructor(@Inject('PixelStore') pixelStore: any, 
		pixelActions: PixelActions){
			this.pixelStore = pixelStore;
   			this.pixelActions = pixelActions;
	}

	ngOnInit(){

	}

	private addPixel(input) {
	   	this.pixelStore.dispatch(this.pixelActions.addPixel(input.value));
   		console.log('Whoopie');
 	}
};
import {Reducer} from 'redux'

export function pixelReducer(state, action){
	switch (action.type) {
		case 'ADD_PIXEL':
			return state + 1; 	
		default:
			return state; 
	} 
}
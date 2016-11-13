import {Reducer} from 'redux'

export const initialState = {
 pixels: [],
}

export function pixelReducer(state: any = initialState, action){
	switch (action.type) {
		case 'ADD_PIXEL':
			console.log(action)
			return {
			   pixels: state.pixels.concat({
			     id: action.id,
			   })
		   }	
		default:
			return state; 
	} 
}
export const ADD_PIXEL = 'ADD_PIXEL'; //convenience token

export class PixelActions {
 constructor() {}
 
 addPixel(id){ 
   return {
     type: ADD_PIXEL,
     id: id,
   };
 };
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {createStore} from 'redux';
import {pixelReducer} from './pixelStateReducer';
import {PixelActions} from './ActionCreator';

import { AppComponent } from './app.component';
import { PixelboxComponent } from './pixelbox/pixelbox.component';
import { Pixelbox2Component } from './pixelbox2/pixelbox2.component'
import { PixelcontainerComponent } from './pixelcontainer/pixelcontainer.component';
import { Pixelcontainer2Component } from './pixelcontainer2/pixelcontainer2.component'

const pixelStore = createStore(pixelReducer);

@NgModule({
  declarations: [
    AppComponent,
    PixelboxComponent,
    Pixelbox2Component,
    PixelcontainerComponent,
    Pixelcontainer2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: 'PixelStore', useValue: pixelStore },
    PixelActions 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PixelComponent } from './pixel/pixel.component'
import { PixelboxComponent } from './pixelbox/pixelbox.component';
import { PixelcontainerComponent } from './pixelcontainer/pixelcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    PixelComponent,
    PixelboxComponent,
    PixelcontainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

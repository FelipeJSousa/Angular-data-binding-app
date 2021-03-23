import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
// import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    // MatButtonModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { AppRoutingModule } from './/app-routing.module';
import { State2Component } from './state2/state2.component';
import { State3Component } from './state3/state3.component';
import { State4Component } from './state4/state4.component';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    State2Component,
    State3Component,
    State4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

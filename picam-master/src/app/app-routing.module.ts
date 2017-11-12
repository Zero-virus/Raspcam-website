import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StateComponent } from './state/state.component';
import { State2Component } from './state2/state2.component';
import { State3Component } from './state3/state3.component';
import { State4Component } from './state4/state4.component';

const routes: Routes = [
  {path: 'state', component: StateComponent},
  {path: 'state2', component: State2Component},
  {path: 'state3', component: State3Component},
  {path: 'state4', component: State4Component}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

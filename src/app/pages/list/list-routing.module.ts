import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ListComponent } from './list.component'

const routes: Route[] = [
  {
    path: '',
    component: ListComponent
  }
]

@NgModule({
  imports: [
  RouterModule.forChild(routes)  
  ],
  declarations: []
})
export class ListRoutingModule { }

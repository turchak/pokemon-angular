import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../../shared/shared.module';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    ListComponent
  ],
  declarations: [ListComponent, CardComponent, PaginatorComponent]
})
export class ListModule { }

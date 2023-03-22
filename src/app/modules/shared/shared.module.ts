import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    TableComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }

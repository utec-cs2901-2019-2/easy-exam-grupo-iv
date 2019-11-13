import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  exports: [
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule
  ]
})
export class MaterialModule { }

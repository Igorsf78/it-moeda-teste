import { RouterModule } from '@angular/router';
// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule], // ? changed
  exports: [
    SidenavComponent
  ], // ? added
})
export class SharedModule { }

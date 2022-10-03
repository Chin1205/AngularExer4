import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './command-bar/command-bar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    CommandBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommandBarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }

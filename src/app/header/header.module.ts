import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileHeaderComponent} from "./mobile-header/mobile-header.component";
import {DesktopHeaderComponent} from "./desktop-header/desktop-header.component";



@NgModule({
  declarations: [
    MobileHeaderComponent,
    DesktopHeaderComponent
  ],
  exports: [
    MobileHeaderComponent,
    DesktopHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }

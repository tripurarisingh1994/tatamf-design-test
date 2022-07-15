import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./header/header.module";
import {ResponsiveService} from "./services/responsive.service";
import {HeaderComponent} from "./header/header.component";
import {OnlineEmpanelmentComponent} from "./online-empanelment/online-empanelment.component";
import {Type2TemplateComponent} from "./templates/iterator-1/auth/type2-template/type2-template.component";
import {Screen6Component} from "./templates/iterator-1/auth/screen6/screen6.component";
import {Screen5Component} from "./templates/iterator-1/auth/screen5/screen5.component";
import {Screen4Component} from "./templates/iterator-1/auth/screen4/screen4.component";
import {Screen3Component} from "./templates/iterator-1/auth/screen3/screen3.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OnlineEmpanelmentComponent,
    Type2TemplateComponent,
    Screen6Component,
    Screen5Component,
    Screen4Component,
    Screen3Component
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HeaderModule
  ],
  providers: [ResponsiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

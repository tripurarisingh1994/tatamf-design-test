import { Component } from '@angular/core';
import {ResponsiveService} from "./services/responsive.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TataMF';

  constructor(private responsiveService:ResponsiveService) {
  }

  ngOnInit() {
    this.responsiveService.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        console.log('Mobile device detected')
      }
      else{
        console.log('Desktop detected')
      }
    });
    this.onResize();
  }

  onResize(){
    this.responsiveService.checkWidth();
  }
}

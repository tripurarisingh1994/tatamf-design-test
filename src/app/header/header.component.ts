import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from "../services/responsive.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isMobile: boolean | undefined;

  constructor(private responsiveService:ResponsiveService) { }

  ngOnInit(): void {

    this.onResize();
    this.responsiveService.checkWidth();

  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }


}

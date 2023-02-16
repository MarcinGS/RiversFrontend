import { Component, OnInit } from '@angular/core';
import { SidebarRegion } from './model/sidebarRegion';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  regions: Array<SidebarRegion> = [];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(){
    this.sidebarService.getRegions()
      .subscribe(regions => this.regions = regions);
  }

}

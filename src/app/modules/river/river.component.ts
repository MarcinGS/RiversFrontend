import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Page } from 'src/app/shared/model/page';
import { River } from './model/river';
import { RiverService } from './river.service';

@Component({
  selector: 'app-river',
  templateUrl: './river.component.html',
  styleUrls: ['./river.component.scss']
})
export class RiverComponent implements OnInit {
  
  page!: Page<River>;
  
  constructor(private riverService: RiverService) { }
  
  ngOnInit(): void {
    this.getRivers();
  }
  
  getRivers(){
    this.getRiverPage(0,5);
  }
  
  
  onPageEvent($event: PageEvent) {
    this.getRiverPage($event.pageIndex, $event.pageSize);
  }

  private getRiverPage(page: number, size: number) {
    this.riverService.getRivers(page, size)
      .subscribe(page => this.page = page);
  }

}

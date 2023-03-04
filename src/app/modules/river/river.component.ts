import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Page } from 'src/app/modules/common/model/page';
import { River } from '../common/model/river';
import { JwtService } from '../common/service/jwt.service';
import { RiverService } from './river.service';

@Component({
  selector: 'app-river',
  templateUrl: './river.component.html',
  styleUrls: ['./river.component.scss'],
})
export class RiverComponent implements OnInit {
  page!: Page<River>;
  isLoggedIn = false;
  
  constructor(private riverService: RiverService,
    private jwtService: JwtService) {}

  ngOnInit(): void {
    this.getRivers();
    this.isLoggedIn = this.jwtService.isLoggedIn();
  }

  getRivers() {
    this.getRiverPage(0, 5);
  }

  onPageEvent($event: PageEvent) {
    this.getRiverPage($event.pageIndex, $event.pageSize);
  }

  private getRiverPage(page: number, size: number) {
    this.riverService
      .getRivers(page, size)
      .subscribe((page) => (this.page = page));
  }

}

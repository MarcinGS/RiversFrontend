import { Component, OnDestroy, OnInit } from '@angular/core';
import { LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { JwtService } from '../common/service/jwt.service';

import { RegionRivers } from './model/regionRivers';
import { RegionService } from './region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit, OnDestroy {
  regionRivers!: RegionRivers;
  private sub!: Subscription;
  isLoggedIn = false;

  constructor(
    private regionService: RegionService,
    private route: ActivatedRoute,
    private router: Router,
    private jwtService: JwtService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.jwtService.isLoggedIn();
    this.sub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.getRegionWithRivers(0, 10));

    this.getRegionWithRivers(0, 10);
  }

  getRegionWithRivers(page: number, size: number) {
    let name = this.route.snapshot.params['name'];
    this.regionService
      .getRegionWithRivers(name, page, size)
      .subscribe((regionRiver) => (this.regionRivers = regionRiver));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onPageEvent(event: PageEvent) {
    this.getRegionWithRivers(event.pageIndex, event.pageSize);
  }
}

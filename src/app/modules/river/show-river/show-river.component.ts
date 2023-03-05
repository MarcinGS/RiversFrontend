import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Measurements } from '../../common/model/measurements';
import { Page } from '../../common/model/page';
import { RiverDetails } from '../../river-details/model/riverDetails';
import { ShowRiverService } from './show-river.service';

@Component({
  selector: 'app-show-river',
  templateUrl: './show-river.component.html',
  styleUrls: ['./show-river.component.scss']
})
export class ShowRiverComponent implements OnInit {

  river!: RiverDetails;
  measurements!: Page<Measurements>;
  
  constructor(
    private router: ActivatedRoute,
    private showRiverService: ShowRiverService) { }

  ngOnInit(): void {
    this.getRiverDetails();
  }

  getRiverDetails(){
    let id = this.router.snapshot.params['id'];
    this.showRiverService.getRiverDetails(id).subscribe((river) => {
      this.river = river;
    });
    this.getRiverMeasurements(0, 5, id);
  }

  
  onPageEvent($event: PageEvent, id: number) {
    this.getRiverMeasurements($event.pageIndex, $event.pageSize, id);
  }

  getRiverMeasurements(pageIndex: number, pageSize: number, id: number) {
    this.showRiverService
      .getMeasurements(pageIndex, pageSize, id)
      .subscribe((m) => (this.measurements = m));
  }
}

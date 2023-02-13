import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiverDetails } from './model/riverDetails';
import { RiverDetailsService } from './river-details.service';

@Component({
  selector: 'app-river-details',
  templateUrl: './river-details.component.html',
  styleUrls: ['./river-details.component.scss']
})
export class RiverDetailsComponent implements OnInit {

  river: RiverDetails | undefined;
  
  constructor(private riverDetailsService: RiverDetailsService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRiverDetails();
  }

  getRiverDetails(){
    let stationId = this.router.snapshot.params['stationId'];
      this.riverDetailsService.getRiverDetails(stationId)
      .subscribe(river => this.river = river);
  }

}

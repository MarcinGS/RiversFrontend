import { Component, OnInit } from '@angular/core';
import { River } from './model/river';
import { RiverService } from './river.service';

@Component({
  selector: 'app-river',
  templateUrl: './river.component.html',
  styleUrls: ['./river.component.scss']
})
export class RiverComponent implements OnInit {

  rivers: River[] = [];
  
  constructor(private riverService: RiverService) { }

  ngOnInit(): void {
    this.getRivers();
  }

  getRivers(){
    this.rivers = this.riverService.getRivers();
  }

}

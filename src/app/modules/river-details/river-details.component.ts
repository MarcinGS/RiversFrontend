import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartData, registerables } from 'chart.js';
import { startWith, switchMap } from 'rxjs';
import { Measurements } from '../common/model/measurements';
import { Page } from '../common/model/page';
import { JwtService } from '../common/service/jwt.service';
import { Note } from './model/note';
import { RiverDetails } from './model/riverDetails';
import { RiverDetailsService } from './river-details.service';

@Component({
  selector: 'app-river-details',
  templateUrl: './river-details.component.html',
  styleUrls: ['./river-details.component.scss']
})
export class RiverDetailsComponent implements OnInit {

  river!: RiverDetails;
  measurements!: Page<Measurements>;
  noteForm!: FormGroup;
  isLoggedIn = false;

  displayedColumns: string[] = [
    'waterLevel',
    'waterDate',
    'waterTemp',
    'tempDate',
    'iceLevel',
    'iceDate',
    'growLevel',
    'growDate'
  ];
  constructor(
    private riverDetailsService: RiverDetailsService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private jwtservice: JwtService) { }

  
  ngOnInit(): void {
    this.getRiverDetails();
    this.noteForm = this.formBuilder.group({
      topic: ["", [Validators.required, Validators.min(2)]],
      content: ["", [Validators.required, Validators.min(4)]]
      });
    this.isLoggedIn = this.jwtservice.isLoggedIn();
  }

  getRiverDetails(){
    let id = this.router.snapshot.params['id'];
      this.riverDetailsService.getRiverDetails(id)
      .subscribe(river => {
        this.river = river;
      });    
      this.getRiverMeasurements(0,5,id);
  }

  submit(){
    if(this.noteForm.valid){
      this.riverDetailsService.saveRiverNote({
        topic: this.noteForm.get("topic")?.value,
        content: this.noteForm.get("content")?.value,
        riverId: this.river.id
      } as Note).subscribe(note => {
        this.noteForm.reset();
        this.snackBar.open("Notatka została dodana", "", {duration: 3000, panelClass: "snack-bar-status-ok"});
      });
      
    }
  }

  onPageEvent($event: PageEvent, id: number) {
    this.getRiverMeasurements($event.pageIndex, $event.pageSize, id);
  }

  getRiverMeasurements(pageIndex: number, pageSize: number, id: number) {
    this.riverDetailsService.getMeasurements(pageIndex, pageSize, id)
      .subscribe(m => this.measurements = m);
  }

  get topic(){
    return this.noteForm.get('topic');
  }

  get content() {
    return this.noteForm.get('content');
  }

}

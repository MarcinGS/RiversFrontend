import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Measurements } from '../common/model/measurements';
import { Page } from '../common/model/page';
import { JwtService } from '../common/service/jwt.service';
import { Note } from '../user-list/model/note';
import { RiverDetails } from './model/riverDetails';
import { RiverDetailsService } from './river-details.service';

@Component({
  selector: 'app-river-details',
  templateUrl: './river-details.component.html',
  styleUrls: ['./river-details.component.scss'],
})
export class RiverDetailsComponent implements OnInit {
  river!: RiverDetails;
  measurements!: Page<Measurements>;
  noteForm!: FormGroup;
  isLoggedIn = false;
  userListItemId!: number;

  constructor(
    private riverDetailsService: RiverDetailsService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private jwtservice: JwtService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userListItemId = Number(
      this.route.snapshot.queryParams['userListItemId']
    );
    this.getRiverDetails();
    this.noteForm = this.formBuilder.group({
      topic: ['', [Validators.required, Validators.min(2)]],
      content: ['', [Validators.required, Validators.min(4)]],
    });
    this.isLoggedIn = this.jwtservice.isLoggedIn();
  }

  getRiverDetails() {
    let id = this.router.snapshot.params['id'];
    this.riverDetailsService.getRiverDetails(id).subscribe((river) => {
      this.river = river;
    });
    this.getRiverMeasurements(0, 3, id);
  }

  onPageEvent($event: PageEvent, id: number) {
    this.getRiverMeasurements($event.pageIndex, $event.pageSize, id);
  }

  getRiverMeasurements(pageIndex: number, pageSize: number, id: number) {
    this.riverDetailsService
      .getMeasurements(pageIndex, pageSize, id)
      .subscribe((m) => (this.measurements = m));
  }

  get topic() {
    return this.noteForm.get('topic');
  }

  get content() {
    return this.noteForm.get('content');
  }
}

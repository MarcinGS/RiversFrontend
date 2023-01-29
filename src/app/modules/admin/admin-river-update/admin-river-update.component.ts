import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminRiverUpdateService } from './admin-river-update.service';
import { AdminRiverUpdate } from './model/adminRiverUpdate';

@Component({
  selector: 'app-admin-river-update',
  templateUrl: './admin-river-update.component.html',
  styleUrls: ['./admin-river-update.component.scss']
})
export class AdminRiverUpdateComponent implements OnInit {
  
  river!: AdminRiverUpdate;
  riverForm!: FormGroup;
  
  constructor(
    private router: ActivatedRoute,
    private adminRiverUpdateService: AdminRiverUpdateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar) { }
    
  ngOnInit(): void {
    this.getRiver();

    this.riverForm = this.formBuilder.group({
      stationId: [''],
      stationName: [''],
      riverName: [''],
      region: [''],
      waterLevel: [''],
      waterDate: [''],
      waterTemp: [''],
      tempDate: [''],
      iceLevel: [''],
      iceDate: [''],
      growLevel: [''],
      growDate: ['']
    })
  }
  
  getRiver(){
    let id = Number(this.router.snapshot.params['id']);
    this.adminRiverUpdateService.getRiver(id).subscribe(river => this.mapFormValues(river));
  }

  
  submit() {
    let id = Number(this.router.snapshot.params['id']);
    this.adminRiverUpdateService.savePost(id, this.riverForm.value).subscribe(river => {
      this.mapFormValues(river);
      this.snackBar.open("Dane zostały zapisane","", {duration: 3000});
    });
  }

  private mapFormValues(river: AdminRiverUpdate): void {
    return this.riverForm.setValue({
      stationId: river.stationId,
      stationName: river.stationName,
      riverName: river.riverName,
      region: river.region,
      waterLevel: river.waterLevel,
      waterDate: river.waterDate,
      waterTemp: river.waterTemp,
      tempDate: river.tempDate,
      iceLevel: river.iceLevel,
      iceDate: river.iceDate,
      growLevel: river.growLevel,
      growDate: river.growDate
    });
  }
}

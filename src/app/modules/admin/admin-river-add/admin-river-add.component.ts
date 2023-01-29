import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminRiverAddService } from './admin-river-add.service';

@Component({
  selector: 'app-admin-river-add',
  templateUrl: './admin-river-add.component.html',
  styleUrls: ['./admin-river-add.component.scss']
})
export class AdminRiverAddComponent implements OnInit {
  
  riverForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private adminRiverAddService: AdminRiverAddService,
    private router: Router,
    private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.riverForm = this.formBuilder.group({
      stationId: ['', Validators.required],
      stationName: ['', Validators.required],
      riverName: ['', Validators.required],
      region: ['', Validators.required],
      waterLevel: [''],
      waterDate: [''],
      waterTemp: [''],
      tempDate: [''],
      iceLevel: ['', Validators.min(0)],
      iceDate: [''],
      growLevel: ['', Validators.min(0)],
      growDate: ['']
    })
  }
  
  submit() {
    this.adminRiverAddService.saveNewRiver(this.riverForm.value)
    .subscribe(river => {
      this.router.navigate(["/admin/rivers/update", river.id])
      .then(() => this.snackBar.open("Nowa pozycja została dodana", "", {duration: 3000}))
    });
    

  }

}

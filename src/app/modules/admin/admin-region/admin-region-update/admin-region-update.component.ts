import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminRegionService } from '../admin-region.service';
import { AdminRegion } from '../model/adminRegion';

@Component({
  selector: 'app-admin-region-update',
  templateUrl: './admin-region-update.component.html',
  styleUrls: ['./admin-region-update.component.scss']
})
export class AdminRegionUpdateComponent implements OnInit {

  regionForm!: FormGroup;
  constructor(
    private adminRegionService: AdminRegionService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.regionForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required]
    });
    this.getRegion();
  }

  getRegion(){
    this.adminRegionService.getRegion(Number(this.route.snapshot.params['id']))
      .subscribe(region => this.mapToFormValues(region));
  }


 
  submit(){
      this.adminRegionService.saveRegion(Number(this.route.snapshot.params['id']), this.regionForm.value)
        .subscribe(region => {
          this.mapToFormValues(region);
          this.snackBar.open("Województwo zostało zapisane", "", {duration: 3000});
        })
  }

  private mapToFormValues(region: AdminRegion) {
    this.regionForm.setValue({
      id: region.id,
      name: region.name
    });
  }
}

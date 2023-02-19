import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminRiverUpdateService } from './admin-river-update.service';
import { AdminRiverUpdate } from '../model/adminRiverUpdate';
import { AdminRiverImageService } from '../admin-river-image.service';

@Component({
  selector: 'app-admin-river-update',
  templateUrl: './admin-river-update.component.html',
  styleUrls: ['./admin-river-update.component.scss'],
})
export class AdminRiverUpdateComponent implements OnInit {
  river!: AdminRiverUpdate;
  riverForm!: FormGroup;
  requiredFileTypes = 'image/jpeg, image/png';
  imageForm!: FormGroup;
  image: string | null = null;

  constructor(
    private router: ActivatedRoute,
    private adminRiverUpdateService: AdminRiverUpdateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private adminRiverimageService: AdminRiverImageService
  ) {}

  ngOnInit(): void {
    this.getRiver();

    this.riverForm = this.formBuilder.group({
      stationId: ['', Validators.required],
      stationName: ['', Validators.required],
      riverName: ['', Validators.required],
      regionId: ['', Validators.required],
      waterLevel: [''],
      waterDate: [''],
      waterTemp: [''],
      tempDate: [''],
      iceLevel: ['', Validators.min(0)],
      iceDate: [''],
      growLevel: ['', Validators.min(0)],
      growDate: [''],
    });

    this.imageForm = this.formBuilder.group({
      file: [''],
    });
  }

  getRiver() {
    let id = Number(this.router.snapshot.params['id']);
    this.adminRiverUpdateService
      .getRiver(id)
      .subscribe((river) => this.mapFormValues(river));
  }

  submit() {
    let id = Number(this.router.snapshot.params['id']);
    this.adminRiverUpdateService
      .savePost(id, {
        stationId: this.riverForm.get('stationId')?.value,
        stationName: this.riverForm.get('stationName')?.value,
        riverName: this.riverForm.get('riverName')?.value,
        regionId: this.riverForm.get('regionId')?.value,
        waterLevel: this.riverForm.get('waterLevel')?.value,
        waterDate: this.riverForm.get('waterDate')?.value,
        waterTemp: this.riverForm.get('waterTemp')?.value,
        tempDate: this.riverForm.get('tempDate')?.value,
        iceLevel: this.riverForm.get('iceLevel')?.value,
        iceDate: this.riverForm.get('iceDate')?.value,
        growLevel: this.riverForm.get('growLevel')?.value,
        growDate: this.riverForm.get('growDate')?.value,
        image: this.image,
      } as AdminRiverUpdate)
      .subscribe((river) => {
        this.mapFormValues(river);
        this.snackBar.open('Dane zostały zapisane', '', { duration: 3000 });
      });
  }

  uploadFile() {
    let formData = new FormData();
    formData.append('file', this.imageForm.get('file')?.value);
    this.adminRiverimageService
      .uploadImage(formData)
      .subscribe((result) => (this.image = result.filename));
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.imageForm.patchValue({
        file: event.target.files[0],
      });
    }
  }

  private mapFormValues(river: AdminRiverUpdate): void {
    this.riverForm.setValue({
      stationId: river.stationId,
      stationName: river.stationName,
      riverName: river.riverName,
      regionId: river.regionId,
      waterLevel: river.waterLevel,
      waterDate: river.waterDate,
      waterTemp: river.waterTemp,
      tempDate: river.tempDate,
      iceLevel: river.iceLevel,
      iceDate: river.iceDate,
      growLevel: river.growLevel,
      growDate: river.growDate,
    });
    this.image = river.image;
  }
}

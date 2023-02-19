import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminRiverImageService } from '../admin-river-image.service';
import { AdminRiverUpdate } from '../model/adminRiverUpdate';
import { AdminRiverAddService } from './admin-river-add.service';

@Component({
  selector: 'app-admin-river-add',
  templateUrl: './admin-river-add.component.html',
  styleUrls: ['./admin-river-add.component.scss'],
})
export class AdminRiverAddComponent implements OnInit {
  river!: AdminRiverUpdate;
  riverForm!: FormGroup;
  requiredFileTypes = 'image/jpeg, image/png';
  imageForm!: FormGroup;
  image: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private adminRiverAddService: AdminRiverAddService,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminRiverimageService: AdminRiverImageService
  ) {}

  ngOnInit(): void {
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

  submit() {
    this.adminRiverAddService
      .saveNewRiver({
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
        this.router.navigate(['/admin/rivers/update', river.id]).then(() =>
          this.snackBar.open('Nowa pozycja została dodana', '', {
            duration: 3000,
          })
        );
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
}

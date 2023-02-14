import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminRegionNamesDto } from './adminRegionNamesDto';
import { FormRegionService } from './form-region.service';

@Component({
  selector: 'app-admin-river-form',
  template: `<div [formGroup]="parentForm">
    <div fxLayoutGap="10">
      <mat-form-field appearance="outline">
        <mat-label>Id stacji</mat-label>
        <input
          matInput
          placeholder="Podaj id stacji"
          formControlName="stationId"
        />
        <div
          *ngIf="stationId?.invalid && (stationId?.dirty || stationId?.touched)"
          class="errorMessages"
        >
          <div *ngIf="stationId?.errors?.['required']">Nazwa jest wymagana</div>
        </div>
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Nazwa stacji</mat-label>
        <input
          matInput
          placeholder="Podaj nazwe stacji"
          formControlName="stationName"
        />
        <div
          *ngIf="
            stationName?.invalid && (stationName?.dirty || stationName?.touched)
          "
          class="errorMessages"
        >
          <div *ngIf="stationName?.errors?.['required']">
            Nazwa jest wymagana
          </div>
        </div>
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Nazwa</mat-label>
        <input
          matInput
          placeholder="Podaj nazwe rzeki"
          formControlName="riverName"
        />
        <div
          *ngIf="riverName?.invalid && (riverName?.dirty || riverName?.touched)"
          class="errorMessages"
        >
          <div *ngIf="riverName?.errors?.['required']">Nazwa jest wymagana</div>
        </div>
      </mat-form-field>

      <mat-form-field appearance="outline">
          <mat-label>Województwo</mat-label>
          <mat-select formControlName="regionId">
            <mat-option *ngFor="let element of regions" [value]="element.id">
              {{ element.name }}
            </mat-option>
          </mat-select>
          <div
          *ngIf="regionId?.invalid && (regionId?.dirty || regionId?.touched)"
          class="errorMessages">
          <div *ngIf="regionId?.errors?.['required']">Nazwa jest wymagana</div>
        </div>
        </mat-form-field>
    </div>

    <div>
      <div fxLayoutGap="10">
        <mat-form-field>
          <mat-label>Poziom wody</mat-label>
          <input
            matInput
            placeholder="Poziom wody"
            formControlName="waterLevel"
          />
        </mat-form-field>

        <mat-form-field fxFlex="25">
          <mat-label>Data pomiaru</mat-label>
          <input
            matInput
            placeholder="Data pomiaru poziomu wody"
            formControlName="waterDate"
          />
        </mat-form-field>
      </div>

      <div fxLayoutGap="10">
        <mat-form-field>
          <mat-label>Temperatura wody</mat-label>
          <input
            matInput
            placeholder="Temperatura wody"
            formControlName="waterTemp"
          />
        </mat-form-field>

        <mat-form-field fxFlex="25">
          <mat-label>Data pomiaru</mat-label>
          <input
            matInput
            placeholder="Data pomiaru temperatury wody"
            formControlName="tempDate"
          />
        </mat-form-field>
      </div>

      <div fxLayoutGap="10">
        <mat-form-field>
          <mat-label>Zjawisko lodowe</mat-label>
          <input
            matInput
            placeholder="Poziom zjawiska lodowego"
            formControlName="iceLevel"
          />
          <div
            *ngIf="iceLevel?.invalid && (iceLevel?.dirty || iceLevel?.touched)"
            class="errorMessages"
          >
            <div *ngIf="iceLevel?.errors?.['min']">
              Poziom nie może być mniejszy od 0
            </div>
          </div>
        </mat-form-field>

        <mat-form-field fxFlex="25">
          <mat-label>Data pomiaru</mat-label>
          <input
            matInput
            placeholder="Data pomiaru zjawiska lodowego"
            formControlName="iceDate"
          />
        </mat-form-field>
      </div>

      <div fxLayoutGap="10">
        <mat-form-field>
          <mat-label>Zjawisko zarastania</mat-label>
          <input
            matInput
            placeholder="Poziom zjawiska zarastania"
            formControlName="growLevel"
          />
          <div
            *ngIf="
              growLevel?.invalid && (growLevel?.dirty || growLevel?.touched)
            "
            class="errorMessages"
          >
            <div *ngIf="growLevel?.errors?.['min']">
              Poziom nie może być mniejszy od 0
            </div>
          </div>
        </mat-form-field>

        <mat-form-field fxFlex="25">
          <mat-label>Data zarastania</mat-label>
          <input
            matInput
            placeholder="Data pomiaru zjawiska zarastania"
            formControlName="growDate"
          />
        </mat-form-field>
      </div>
    </div>

    <div fxLayoutAlign="end">
      <button mat-flat-button color="primary" [disabled]="!parentForm.valid">
        Zapisz
      </button>
    </div>
  </div>`,
  styles: [
    `
      .errorMessages {
        color: red;
      }
    `,
  ],
})
export class AdminRiverFormComponent implements OnInit {

  @Input() parentForm!: FormGroup;
  regions: Array<AdminRegionNamesDto> = [];

  constructor(private formRegionService: FormRegionService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.formRegionService.getRegions()
      .subscribe(regions => this.regions = regions);
  }

  get stationId() {
    return this.parentForm.get('stationId');
  }

  get stationName() {
    return this.parentForm.get('stationName');
  }

  get riverName() {
    return this.parentForm.get('riverName');
  }

  get regionId() {
    return this.parentForm.get('region');
  }

  get iceLevel() {
    return this.parentForm.get('iceLevel');
  }

  get growLevel() {
    return this.parentForm.get('growLevel');
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-region-form',
  template: `<div [formGroup]="parentForm">
    <div fxLayoutGap="10">
      <mat-form-field appearance="outline">
        <mat-label>ID województwa</mat-label>
        <input
          matInput
          placeholder="Podaj id Województwa"
          formControlName="id"
        />
        <div
          *ngIf="id?.invalid && (id?.dirty || id?.touched)"
          class="errorMessages"
        >
          <div *ngIf="id?.errors?.['required']">Nazwa jest wymagana</div>
        </div>
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Nazwa województwa</mat-label>
        <input
          matInput
          placeholder="Podaj nazwe Województwa"
          formControlName="name"
        />
        <div
          *ngIf="
            name?.invalid && (name?.dirty || name?.touched)
          "
          class="errorMessages">
          <div *ngIf="name?.errors?.['required']">
            Nazwa jest wymagana
          </div>
        </div>
      </mat-form-field>

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
export class AdminRegionFormComponent implements OnInit {

  @Input() parentForm!: FormGroup;
  

  constructor() {}

  ngOnInit(): void {
  }

  get name() {
    return this.parentForm.get('name');
  }

  get id(){
    return this.parentForm.get('id');
  }

}

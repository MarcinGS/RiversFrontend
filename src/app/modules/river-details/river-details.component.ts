import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
  noteForm!: FormGroup;
  
  constructor(
    private riverDetailsService: RiverDetailsService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getRiverDetails();
    this.noteForm = this.formBuilder.group({
      topic: ["", [Validators.required, Validators.min(2)]],
      content: ["", [Validators.required, Validators.min(4)]]
    });
  }

  getRiverDetails(){
    let stationId = this.router.snapshot.params['stationId'];
      this.riverDetailsService.getRiverDetails(stationId)
      .subscribe(river => this.river = river);
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

  get topic(){
    return this.noteForm.get('topic');
  }

  get content() {
    return this.noteForm.get('content');
  }

}

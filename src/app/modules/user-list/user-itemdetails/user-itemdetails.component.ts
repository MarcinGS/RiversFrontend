import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Note } from '../model/note';
import { UserItemDetailsService } from './user-item-details.service';

@Component({
  selector: 'app-user-itemdetails',
  templateUrl: './user-itemdetails.component.html',
  styleUrls: ['./user-itemdetails.component.scss'],
})
export class UserItemdetailsComponent implements OnInit {
  note!: Array<Note>;

  @Input()
  userListItemId!: number;

  noteForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userItemDetailService: UserItemDetailsService
  ) {}

  ngOnInit(): void {
    this.getRiverNote(this.userListItemId);
    this.noteForm = this.formBuilder.group({
      topic: ['', [Validators.required, Validators.min(2)]],
      content: ['', [Validators.required, Validators.min(4)]],
    });
  }

  submit() {
    if (this.noteForm.valid) {
      this.userItemDetailService
        .saveRiverNote({
          topic: this.noteForm.get('topic')?.value,
          content: this.noteForm.get('content')?.value,
          userListItemId: this.userListItemId,
        } as Note)
        .subscribe((note) => {
          this.noteForm.reset();
          this.snackBar.open('Notatka została dodana', '', {
            duration: 3000,
            panelClass: 'snack-bar-status-ok',
          });
          this.getRiverNote(this.userListItemId);
        });
    }
  }

  getRiverNote(userListItemId: number) {
    this.userItemDetailService
      .getRiverNote(userListItemId)
      .subscribe((note) => (this.note = note));
  }

  deleteNote(id: number) {
    this.userItemDetailService.deleteNote(id).subscribe(() => {
      this.getRiverNote(this.userListItemId);
      this.snackBar.open("Notatka została usunięta","",{duration: 3000, panelClass: "snack-bar-status-delete"});
    });
  }

  get topic() {
    return this.noteForm.get('topic');
  }

  get content() {
    return this.noteForm.get('content');
  }
}

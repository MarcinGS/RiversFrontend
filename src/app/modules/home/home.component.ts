import { Component, OnInit } from '@angular/core';
import { AdminConfirmDialogService } from '../admin/common/service/admin-confirm-dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  constructor(private adminCondirmdialog: AdminConfirmDialogService) { }

  ngOnInit(): void {
    
    this.adminCondirmdialog.openConfirmDialog("Strona wykonana na potrzeby pracy dyplomowej. Nie przechowuj na niej żadnych danych wrażliwych! Pliki cookie przechowywane sa przez 24h.");
    
    
  }

}

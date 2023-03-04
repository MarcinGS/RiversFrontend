import { Component, OnInit } from '@angular/core';
import { AdminConfirmDialogService } from '../admin/common/service/admin-confirm-dialog.service';
import { JwtService } from '../common/service/jwt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



 
  constructor() { }

  ngOnInit(): void {  
    
  }

}

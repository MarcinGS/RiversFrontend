import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isComplited = false;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  update(): void{
    this.isComplited = true;
    this.adminService.update()
    .subscribe(() => {
      setTimeout(() => this.isComplited = false, 3000);
    });
  }

}

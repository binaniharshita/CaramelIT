import { Component, OnInit } from '@angular/core';

import  { AdminService } from '../shared-user/admin/admin.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  adminDetails;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getAdminProfile().subscribe(
      res => {
        this.adminDetails = res['admin'];
      },
      err => { 
        console.log(err);
        
      }
    )
  }

  onLogout(){
    this.adminService.deleteToken();
    this.router.navigate(['admin-signin']);
  }

}

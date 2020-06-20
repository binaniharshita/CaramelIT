import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared-user/admin/admin.service';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-admin-dashboard1',
  templateUrl: './admin-dashboard1.component.html',
  styleUrls: ['./admin-dashboard1.component.css']
})
export class AdminDashboard1Component implements OnInit {
  adminDetails;

  sideBarOpen = true;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getAdminProfile().subscribe(
      res => {
        this.adminDetails = res['admin'];
        // console.log(this.adminDetails);
      },
      err => {
        console.log(err);

      }
    )
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}

import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared-user/admin/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  adminDetails;
  name: string;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getAdminProfile().subscribe(
      res => {
        this.adminDetails = res['admin'];
        this.name = this.adminDetails.adminName;
      },
      err => {
        console.log(err);

      }
    )
  }

}

import { environment } from './../../../environments/environment';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
// import { CommonService } from 'src/app/base/services/common.service';
declare var $: any;

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css'],
  providers: []
})
export class LeftmenuComponent implements OnInit {
  dynamicCls: string = 'noActive';
  home_link: string;
  roleShow:boolean;
  roleArray:any = ['Admin','System Admin'];
  attendanceShow: boolean;
  showTrigger: boolean = false;
  designation: string;
  employee_name: string;
  constructor( private router: Router ) {



  }

  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  }

  clickEvent(type: string): void {
    if (type == 'close')
      this.dynamicCls = 'noActive';
    else
      this.dynamicCls = 'active';
  }
  
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  triggermenu(){
    this.showTrigger = ! this.showTrigger;
  }
}


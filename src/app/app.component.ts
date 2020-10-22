import { Component } from '@angular/core';
import { sharedService } from './service/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  role: string;
  menu:boolean;

  constructor(private commonService: sharedService ,private router: Router) {
    this.commonService.$castToken.subscribe(bool => {
      this.menu = bool;
      console.log(this.menu)
  });
}
ngOnInit() {
  
  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
}

logout(){
  localStorage.clear();
  this.commonService.getToken(false)
  this.router.navigate(['/login'])
}

// ngAfterViewChecked(){
//   this.commonService.$castToken.subscribe(bool => {
//     this.menu = bool;
//     console.log(this.menu)
// });
// }
}

import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  candinatedata:any
  status:any
  constructor(private service:MainserviceService,private router:Router,private commonService: sharedService) { }

  ngOnInit() {
    this.commonService.getToken(true)
this.getdata()
  }
  getdata(){
this.service.getuser().subscribe((res)=>{
  console.log(res)
  this.candinatedata= res

})
  }

  back(){
    this.router.navigate(['dashboard'])
  }

  block(id,status){
    console.log(status)
if(status=="0"){
 this.status=1
}else{
  this.status=0
}
let obj={
  "userId":id,
 "is_blocked":this.status
}  
this.service.bloskuser(obj).subscribe((res)=>{
  if(res){
    if(status=="0"){
      alert("Block Sucessfull")
    }else{
      alert("Unblock Sucessfull")
    }
    this.getdata()
  }
})
  }

}

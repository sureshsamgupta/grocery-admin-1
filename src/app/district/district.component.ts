import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  p: number = 1;
  Name:any
  districtdata:any[]
  mucipledta:any
  status=true

  constructor(private service:MainserviceService,private router:Router,private sub:sharedService) { }


  ngOnInit() {
    this.sub.getToken(true);
    this.getdistrcitdata()
  }

  addistrict(){
    if(!this.Name){
      alert("Please Enter name")
      return
    }
    let obj={
      "district_name":this.Name,
     "is_available":0
    }
    this.service.adddistrict(obj).subscribe((res)=>{
        if(res){
          alert("Added Sucessfully sucessfully")
          this.Name=''
          this.getdistrcitdata()
        }
    })
  }


  getdistrcitdata(){
    this.service.getdistrcit().subscribe((res)=>{
      if(res){
        this.districtdata=res.response.reverse()
      }
    })
  }

  munci(muncidata){
    this.status=false
    this.mucipledta=muncidata
  }

  backto(){
    this.status=true
  }

}

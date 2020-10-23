import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';

@Component({
  selector: 'app-munciparti',
  templateUrl: './munciparti.component.html',
  styleUrls: ['./munciparti.component.css']
})
export class MuncipartiComponent implements OnInit {
  data:any
  Price:any
  distrcitname:any
  Name:any

  constructor(private service:MainserviceService,private router:Router,private sub:sharedService) { }

  ngOnInit() {
    this.getdistrcitdata()
    this.sub.getToken(true);
  }

  onChange(event, value){
    for(let i=0;i<=this.data.length;i++){
      if(this.data[i].district_name==value){
        this.distrcitname=this.data[i]._id
        console.log(this.distrcitname)
      }
  }
  
    }

  getdistrcitdata(){
    this.service.getdistrcit().subscribe((res)=>{
      if(res){
        this.data=res.response
        this.distrcitname=res.response[0].district_name
      }
    })
  }

  addmunci(){
    if(!this.Name){
      alert("Please Enter Name")
      return
    }else if(!this.Price){
      alert("Please Enter Shipping Fees")
    }
    let obj={
      "districtId":this.distrcitname,
   "municipality_name":this.Name,
   'shipping_fee':this.Price,
     "is_available":1
    }
    this.service.createMunicipality(obj).subscribe((res)=>{
      if(res){
        this.Name=''
        this.Price=''
        alert("Added Sucessfully")
        this.distrcitname=''
      }
    })
  }
}

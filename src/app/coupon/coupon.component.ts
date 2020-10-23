import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  catName:any
  offer_percent:any
  couponresponse:any
  status:any

  constructor(private service:MainserviceService,private router:Router,private sub:sharedService) { }

  ngOnInit() {
    this.getcoupondata()
    this.sub.getToken(true);
  }

  delte(key){
    console.log(key)
    this.service.delcoupon(key).subscribe((res)=>{
      if(res){
        alert("Delete Successfully")
        this.getcoupondata()
      }
    })
}

onChange($event, device){
  if(device=="Cashback"){
    this.status=1
  }else if(device=="Percantage"){
    this.status=0
  }

}

  getcoupondata(){
this.service.getcoupon().subscribe((res)=>{
  if(res){
this.couponresponse=res.response.reverse()
  }
})
  }

  updatedata(){
    if(!this.catName){
      alert("Please Enter Coupon Name")
      return
    }else if(!this.offer_percent){
      alert("Please Enter PerCent")
      return
    }
    let obj={
      "coupon_name":this.catName,
      "offer_percent":this.offer_percent,
      "is_cashback":this.status
    }
    this.service.createcoupon(obj).subscribe((res)=>{
      console.log(res)
    if(res){
      alert("Coupon Added Sucessfully")
      this.catName=""
      this.offer_percent=''
      this.getcoupondata()
    }
    })
  }



}

import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
productdata:any
status=true
productitemany:any
userid1:any
addressitem:any
userdata:any
userid:any
  constructor(private service:MainserviceService,private router:Router,private sub:sharedService) { }

  ngOnInit() {
    this.sub.getToken(true);
    this.getallorder()
  }

  getallorder(){
    this.service.findAllOrder().subscribe((res)=>{
      if(res){
        console.log(res[0].order_status)
        this.productdata=res.reverse();
        for(let i=0;i<=res.length;i++){
          if(res[i].order_status==0){
            res[i].order_status="Pending"
          }else if(res[i].order_status==1){
            res[i].order_status="Accepted"
          }else if(res[i].order_status==2){
            res[i].order_status="Dispatched"
          }else if(res[i].order_status==3){
            res[i].order_status="Completed"
          }else if(res[i].order_status==4){
            res[i].order_status="Reject"
          }
        }
      }
    })
  }

  details(productitems,address,id,user){
  this.status=false
this.userid=id
this.productitemany=productitems
this.addressitem=address
this.userdata=user
this.userid1=user._id
    console.log(productitems)
    console.log("address")
    console.log(address)
    console.log(id)
    console.log(user)

  }


  onChange(event, value){
    var status=0
    if(value=="Accepted"){
      status=1
    }else if(value=="Dispatched"){
      status=2
    }else if(value=="Completed"){
      status=3
    }else if(value=="Reject"){
      status=4
    }
    let obj={
      "orderId": this.userid,
    "order_status": status,
    "userId":this.userid1
    }
    this.service.updateStatus(obj).subscribe((res)=>{
      if(res){
        alert("Status Change")
      }
    })
  }

  backto(){
    this.getallorder()
    this.status=true
  }
}

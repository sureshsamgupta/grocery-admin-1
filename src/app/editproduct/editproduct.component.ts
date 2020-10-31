import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  seller_name:any
  price:any
  product_name:any
  prductid:any
  productdata:any
  constructor(private service:MainserviceService,private router:Router,private sub:sharedService) { }

  ngOnInit() {
    this.sub.getToken(true);
    this.getprduct();
  }

  getprduct(){
    this.service.getproduct().subscribe((response)=>{
      if(response){
        this.productdata=response.response
      }
    })
  
  }

  delte(id,name,pric,sellername){
  
      this.product_name=name
      this.price=pric
    this.seller_name=sellername
      this.prductid=id
  }

  addproduct(){
    if(!this.product_name){
      alert("Please Enter Product name")
      return
    }else if(!this.price){
      alert("Please Enter Price")
      return
    }else if(!this.seller_name){
      alert("Please Enter Seller name")
      return
    }
    let obj={
      "product_name": this.product_name,
    "seller_name": this.seller_name,
    "price": this.price,
    "productId": this.prductid
    }
    this.service.updateprduct(obj).subscribe((response)=>{
      if(response){
        alert("Updated")
        this.getprduct()
      }
    })
  }

}

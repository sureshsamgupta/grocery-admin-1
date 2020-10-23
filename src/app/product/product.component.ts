import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  file:File;
  filename:any
  seller_name:any
  price:any
  categoryname:any
  munciname:any
  product_name:any
  categorydata:any
  munciparties:any
  productdata:any
  @ViewChild('fileUploader',{static: false}) fileUploader:ElementRef;

  constructor(private service:MainserviceService,private router:Router,private sub:sharedService) { }

  ngOnInit() {
    this.sub.getToken(true);
    this.findallcategory()
    this.findallmunci()
    this.getprduct()
  }


  onChange(event, value,key){
console.log(key)
if(key==1){
  for(let i=0;i<=this.categorydata.length;i++){
      if(this.categorydata[i].cat_name==value){
        this.categoryname=this.categorydata[i]._id
        console.log(this.categoryname)
      }
}
}else if(key==2){
  for(let i=0;i<=this.munciparties.length;i++){
    if(this.munciparties[i].municipality_name==value){
      this.munciname=this.munciparties[i]._id
      console.log(this.munciname)
    }
}
}
    
  }



onFileChanged(event) {
  this.file = event.target.files[0]
  console.log(event)
  console.log(event.target.files[0])
  const contentType = this.file.type;
}

findallcategory(){
  this.service.getallcategory().subscribe((res)=>{
    if(res){
      this.categorydata=res.response
    }
  })
}

findallmunci(){
  this.service.findAllMunicipality().subscribe((res)=>{
    if(res){
      this.munciparties=res.response
    }
  })
}

addproduct(){
  if(!this.categoryname){
    alert("Please  Select Category")
    return
  }else if(!this.munciname){
    alert("Please  Select  Municipality")
    return
}else if(!this.seller_name){
  alert("Please Enter   Seller Name")
  return
}else if(!this.price){
  alert("Please Enter  Price")
  return
}else if(!this.product_name){
  alert("Please Enter  Product name")
  return
}else if(!this.file){
  alert("Please select File")
  return
}
this.service.createproduct(this.product_name,this.seller_name,this.file,this.price,this.munciname,this.categoryname).subscribe((res)=>{
  if(res){
    alert("Added Sucessfully Product")
    this.fileUploader.nativeElement.value = null;
    this.getprduct()
    this.price=''
    this.seller_name=''
    this.product_name=''
  }
})
}


getprduct(){
  this.service.getproduct().subscribe((response)=>{
    if(response){
      this.productdata=response.response
    }
  })

}

delte(id){
this.service.delproduct(id).subscribe((res)=>{
  if(res){
    alert("Delete Sucessfully")
    this.getprduct()
  }
})
}

}

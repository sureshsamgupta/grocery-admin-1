import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  categoryname:any
  file:File;
  filename:any
  categorydata:any
  @ViewChild('fileUploader',{static: false}) fileUploader:ElementRef;
  constructor(private service:MainserviceService,private router:Router,private commonService: sharedService) { }

  ngOnInit() {
    this.findallcategory()
    this.commonService.getToken(true)
  }


  updatedata(){
    if(!this.categoryname){
      alert("Please Enter Name")
      return
    }else if(!this.file){
      alert("Please Select File")
      return
    }
    this.service.createproduccategory(this.categoryname,this.file).subscribe((res)=>{
      if(res){
        alert("added")
        this.categoryname=''
        this.fileUploader.nativeElement.value = null;
        this.findallcategory()
      }
    })
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

  delte(key){
      this.service.delproductcategory(key).subscribe((response)=>{
        if(response){
          alert("Delete Successfully")
          this.findallcategory()
        }
      })
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';

@Component({
  selector: 'app-categery',
  templateUrl: './categery.component.html',
  styleUrls: ['./categery.component.css']
})
export class CategeryComponent implements OnInit {
  file:File;
  catType:any=0
  catName:any
  error=false;
  message:any
  image=true
  id:any
  filename:any
  update=false
  candinatedata:any
  @ViewChild('fileUploader',{static: false}) fileUploader:ElementRef;

  constructor(private service:MainserviceService,private router:Router,private commonService: sharedService) { }

  ngOnInit() {
    this.commonService.getToken(true)
    this.webuydata()
  }

  onFileChanged(event) {
    this.file = event.target.files[0]
    console.log(event)
    console.log(event.target.files[0])
    const contentType = this.file.type;
  }

  onChange(event, value){
  this.catType=0
  this.image=true
  }

  signup(){
  if(!this.catType && !this.catName && !this.file){
this.error=true
this.message="enter Correct data"
  }else{
this.service.uploadcategory(this.catType,this.catName,this.file).subscribe((res)=>{
  console.log(res)
  if(res){
    this.webuydata()
    this.fileUploader.nativeElement.value = null;
  this.catName=""
  this.catType=""
  }
}, (error) => {
  alert("Something went wrong")
})
  }
    
  }

  back(){
    this.router.navigate(['dashboard'])
  }


  webuydata(){
    this.service.category(0).subscribe((Response)=>{
      this.candinatedata=Response.response
    })
  }


  delte(id){
    this.service.delcategory(id).subscribe((res)=>{
      if(res){
        alert("Delete Sucessfull")
        this.webuydata()
      }
    }, (error) => {
      alert("Something went wrong")
    })
  }

  block(country){
    this.catName=country.catName
    this.update=true
    this.id=country._id
    this.fileUploader.nativeElement.value=country.catImage
  }

  updatedata(){
    this.service.editcategory(this.catName,this.id,this.file).subscribe((res)=>{
      if(res){
        alert("edit done")
        this.update=false
        this.catName=""
        this.webuydata()
      }
    }, (error) => {
      this.update=false
      alert("Something went wrong")
    })
  }

}

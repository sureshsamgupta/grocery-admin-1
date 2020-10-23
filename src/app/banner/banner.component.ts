import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  file:any
  categorydata:any

  @ViewChild('fileUploader',{static: false}) fileUploader:ElementRef;
  constructor(private service:MainserviceService,private router:Router,private commonService: sharedService) { }

  ngOnInit() {
    this.commonService.getToken(true)
    this.getallbanner()
  }

  getallbanner(){
    this.service.getbanner().subscribe((res)=>{
      if(res){
        this.categorydata=res.response
      }
    })
  }

  updatedata(){
    if(!this.file){
      alert("Please Select Image")
      return
    }
  this.service.createbanner(this.file).subscribe((res)=>{
    if(res){
      alert("Added Sucessfully")
      this.fileUploader.nativeElement.value = null;
      this.getallbanner()
    }
  })
  }

  onFileChanged(event) {
    this.file = event.target.files[0]
    console.log(event)
    console.log(event.target.files[0])
    const contentType = this.file.type;
  }

  delte(key){
    this.service.delbanner(key).subscribe((response)=>{
      if(response){
        alert("Delete Successfully")
        this.getallbanner()
      }
    })
}
}

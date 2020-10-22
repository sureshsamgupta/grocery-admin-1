import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  status=true
  candinatedata:any
  constructor(private service:MainserviceService,private router:Router ,private commonService: sharedService) { }

  ngOnInit() {
    this.commonService.getToken(true)
    this.getdata()
  }

  getdata(){
    this.service.myreaquest().subscribe((res)=>{
      console.log(res)
      this.candinatedata= res.response
    
    }, (error) => {
      alert("Something went wrong")
    })
      }


      chnagescreen(){
        this.status=false
      }

      statuschnage(id,key){
        console.log(id)
        let obj={
            "requestId":id,
            "status":key
        }
        this.service.statuschnage(obj).subscribe((res)=>{
          console.log("res")
          if(res){
          alert("sucessfully changes")
          this.status=true
          }
        })
      }

      backto(){
        this.status=true
        this.getdata()
      }

      back(){
        this.router.navigate(['dashboard'])
      }
}

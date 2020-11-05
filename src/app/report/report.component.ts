import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { Router } from '@angular/router';
import { sharedService } from '../service/shared.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private service:MainserviceService,private router:Router,private sub:sharedService) { }
  data:any[]= ["2020","2021","2022","2022"];  
  month:any[]= ["1","2","3","4","5","6","7","8","9","10","11","12"]; 
  fromYear:any
  fromMonth:any
  fromDate:any
  toYear:any
  toMonth:any
  toDate:any
  frodayes:any=[]
  todayes:any=[]

  ngOnInit() {
    console.log(this.data)
    this.sub.getToken(true);
  }

   daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

addmunci(){
  if(!this.fromYear){
    alert("Please Select From Year")
    return
  }else if(!this.fromMonth){
    alert("Please Select From Month")
    return
  }else if(!this.fromDate){
    alert("Please Select From Date")
    return
  }else if(!this.toYear){
    alert("Please Select To Year")
    return
  }else if(!this.toMonth){
    alert("Please Select To Month")
    return
  }else if(!this.toDate){
    alert("Please Select To Date")
    return
  }
  let obj={
    "fromYear":this.fromYear,
"fromMonth":this.fromMonth,
"fromDate":this.fromDate,
"toYear":this.toYear,
"toMonth":this.toMonth,
"toDate":this.toDate
  }
  this.service.report(obj).subscribe((res)=>{
    if(res){
      console.log(res)
    }
  })
}


onChange(event, value,key){
  // console.log(key)
  if(key==1){
this.fromYear=value
  }else if(key==2){
    this.fromMonth=value
    console.log(this.fromYear)
    console.log(value)
    console.log(this.daysInMonth(this.fromMonth,this.fromYear))
    for(let i=1;i<=this.daysInMonth(this.fromMonth,this.fromYear);i++){
      this.frodayes.push(i)
    }
  }else if(key==3){
    this.fromDate=value
  }else  if(key==4){
    this.toYear=value
      }else if(key==5){
        this.toMonth=value
        console.log(this.fromYear)
        console.log(value)
        console.log(this.daysInMonth(this.toMonth,this.toYear))
        for(let i=1;i<=this.daysInMonth(this.toMonth,this.toYear);i++){
          this.todayes.push(i)
        }
      }else if(key==6){
        this.toDate=value
      }
  
      
    }

}

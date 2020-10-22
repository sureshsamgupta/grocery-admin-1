import { Component, OnInit } from '@angular/core';
import { sharedService } from '../service/shared.service';
import { MainserviceService } from '../service/mainservice/mainservice.service';

@Component({
  selector: 'app-calculatordata',
  templateUrl: './calculatordata.component.html',
  styleUrls: ['./calculatordata.component.css']
})
export class CalculatordataComponent implements OnInit {
  candinatedata:any

  constructor(private commonservice:sharedService,private service:MainserviceService) { }

  ngOnInit() {
    this.commonservice.getToken(true)
    this.data()
  }

  data(){
    this.service.qcrequest().subscribe((res)=>{
      console.log(res)
      this.candinatedata=res
    }, (error) => {
      alert("Something went wrong")
    })
  }

}

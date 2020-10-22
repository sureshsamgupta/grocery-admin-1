import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../service/mainservice/mainservice.service';
import { sharedService } from '../service/shared.service';

@Component({
  selector: 'app-calculatorcategory',
  templateUrl: './calculatorcategory.component.html',
  styleUrls: ['./calculatorcategory.component.css']
})
export class CalculatorcategoryComponent implements OnInit {
  catName:any;
  candinatedata:any
  update=false
  id:any
  country:any
  state:any
  countryname:any
  statename:any
  city:any

  constructor(private service:MainserviceService,private commonService: sharedService) { }

  ngOnInit() {
    this.commonService.getToken(true)
    this.getqccatgegroy()
    this.getcountry()
  }

  getqccatgegroy(){
this.service.category(1).subscribe((res)=>{
  console.log(res)
  if(res){
this.candinatedata=res.response
  }
})
  }

  getcountry(){
    this.service.country().subscribe((response)=>{
      console.log(response)
      this.country=response.response
    })
  }
  onChange($event, value,id){
if(id==1){
this.countryname=value
  for(let i=0;i<=this.country.length;i++){
    if(this.country[i].name==value){
      var counrtyid=this.country[i].id
      this.service.state(counrtyid).subscribe((response)=>{
        console.log(response)
        this.state=response.response
      })
    }
  }
}else if((id==2)){
  this.statename=value
  for(let i=0;i<=this.state.length;i++){
    if(this.state[i].name==value){
      var stateid=this.state[i].id
      console.log(stateid)
      this.service.city(stateid).subscribe((response)=>{
        console.log(response)
        this.city=response.response
      })
    }
  }
} else if((id==3)){
  this.catName=value
  }

}
  delte(id){
    this.service.delcategory(id).subscribe((res)=>{
      if(res){
        alert("delete Sucessfull")
        this.getqccatgegroy()
      }
    }, (error) => {
      alert("Something went wrong")
    })
  }


  signup(){
    if(this.catName && this.countryname && this.statename){
  this.service.uploadqccategory(1,this.catName,this.countryname,this.statename).subscribe((res)=>{
    console.log(res)
    if(res){
    this.catName=""
    this.getqccatgegroy()
    }
  }, (error) => {
    alert("Something went wrong")
  }) 
}else{
  alert("Please Enter Proper data")
}
    }


    edit(data){
      this.catName=data.catName
      this.id=data._id
      this.update=true
    }  

    updatedata(){
      this.service.editcategory(this.catName,this.id,null).subscribe((res)=>{
        if(res){
          alert("edit done")
          this.update=false
          this.catName=""
          this.getqccatgegroy()
        }
      }, (error) => {
        this.update=false
        alert("Something went wrong")
      })
    }
}

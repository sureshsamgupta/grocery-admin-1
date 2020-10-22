import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { sharedService } from '../service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private commonService: sharedService,private router:Router) { }

  ngOnInit() {
    this.commonService.getToken(false)
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

   
    if (this.registerForm.invalid) {
        return;
    }else{
     if(this.registerForm.value.email=="admin" && this.registerForm.value.password=="111111"){
       this.router.navigate(['user'])
     }else{
       alert("Username and Password Wrong")
     }
    }
  }
}

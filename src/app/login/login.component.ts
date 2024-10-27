import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform:any
  submited:boolean=false
  regForm: any;
  wrongPassword:boolean = false
  locallData: any;
  wrongEmail:boolean = false;
  constructor(private fb:FormBuilder , private route : Router){}
  ngOnInit(): void {
    this. locallData = localStorage.getItem('ecomregister');;
   console.log(this.locallData,'121:::')
   if(this.locallData != null){
    this.regForm = JSON.parse(this.locallData)
   }
       this.loginform = this.fb.group({
        email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password:['',[Validators.required,Validators.minLength(6)]],
      
     })
  }

  loginformfunctonality(){
   this.submited = true;
   console.log(this.loginform.valid,'31..')
   if(this.loginform.valid){
     this.regForm.forEach((v:any)=>{
      if(this.loginform.controls.email.value === v.email && this.loginform.controls.password.value === v.password)
       {
         localStorage.setItem('currentUser',JSON.stringify(v))
         console.log(v,'69:::')
         this.route.navigate(['/homepage'])
       }
  
       })
       
       if(this.locallData !== this.loginform.value.password && this.locallData !== this.loginform.value.email){
        this.wrongPassword=true
        this.wrongEmail=true
       }
   }

 
  }
 
}

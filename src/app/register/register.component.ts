import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  regForm:any;
  submited:boolean= false
  Data: any;
  stdetails: any;
  name:any;
  email:any;
  phone:any;
  password:any;
  cnpassword:any
gender:any;
 emailExists: boolean =false;

  constructor(private fb : FormBuilder, private route : Router){}
ngOnInit(): void {
    this.regForm = this.fb.group({
      name : ['',[Validators.required,Validators.pattern('[A-Za-z]*$')]],
      email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone:['',[Validators.required,Validators.pattern('[0-9]*$'),Validators.minLength(10)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      cnpassword:['',[Validators.required]], 
       gender:['',Validators.required],
    }
    )
}

  registerValidation(){
               this.submited = true;
                  console.log(this.regForm,'111::::')
               if (this.regForm.value.password === this.regForm.value.cnpassword && this.regForm.valid) {
                   console.log(this.regForm, '5:::');
                   this.Data =JSON.parse(localStorage.getItem('ecomregister') || '[]');
                   console.log(    this.Data , '44:::::');
                   const emailExists = this.Data.find((item: any) => item.email === this.regForm.value.email);
                   if (!emailExists) {
                     this.stdetails = this.regForm.value;
                   console.log(this.stdetails, '45:::');
                   this.Data.push(this.stdetails);
                       localStorage.setItem("ecomregister", JSON.stringify( this.Data ));
                       this.route.navigate(['/login'])
                   } else {
                      this.emailExists = true
                   }
               }

  }
}

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.css']
})
export class DetailedPageComponent implements OnInit{
  addtocartdetails: any;
  cartdata: any;
  productdetails: any;
  prdetails: any=[];
  cartpage: any=[];
  totalprice=0;
 
  constructor(private service: CommonService,private route:Router){}

  ngOnInit(): void {
   this.service.checkaddtocart.subscribe((res:any)=>{
    console.log(res,'321:::')
    this.cartpage = res;
    this.cartpage.forEach((e: any) =>{
      this.totalprice = e.price as number + this.totalprice
    })
   })
  }
  Checkout(){
    if(this.cartpage.length>0){
      window.alert('empty card');
    }
    else{
      window.alert('order placed successfully');
      this.cartpage.splice(0)
      this.route.navigate(['/homepage']);
    }
  }
  delete(index:any){
    console.log(index,'66:::');
    this.cartpage.splice(index,1)
    // this.cartpage.splice(i)
  }
}

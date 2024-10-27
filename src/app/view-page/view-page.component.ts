import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit{
 
  productdetails:any=[]
  viewPage: any;
  cartdata: any;
  count =0
  ecommerceData: any=[];
  array: any;
  constructor(private service:CommonService, private route: Router){}
  ngOnInit(): void {
    this.service.Products.subscribe((res:any)=>{
      this.productdetails.push(res)
      console.log(this.productdetails,'11::::::')
    })
  }
  addtocart(data: any) {
    this.cartdata.push(data);
 
  }
  
  // Product(prdmsg:any){
  //    console.log(prdmsg,'65::::')
  //    this.viewPage = prdmsg

  // }
  // addtocart(prduct:any){

  // }
  addtocartData(addtcart:any){
       this.productdetails = addtcart
      console.log(this.productdetails,'715:::')
       this.ecommerceData.push(this.addtocart)
   this.service.productDetails(addtcart);
    this.route.navigate(['/detailpage'])
  }
}

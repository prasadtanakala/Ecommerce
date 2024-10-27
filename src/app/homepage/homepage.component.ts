import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  somedata:any
  customersinfo:any
  regForm: any;
  ecomData: any;
  searchText:any
  ecommerceData: any;
  products: any;
  newOne: boolean =false;
  cartdata:any=[];
  data:any;
  count=0;
  @Output() ProductDtls= new EventEmitter<any[]>;
 public  productdetails: any;
  mockData: any;
  array: any=[];
  data1: any =[];
  productQuantity: any;
  Data: any=[];
  constructor( private http: HttpClient ,private route: Router,private service:CommonService){
      

  }

  ngOnInit(): void {
        
   this.http.get('https://fakestoreapi.com/products').subscribe((res:any)=>{
     
       this.ecommerceData = res;
       this.mockData = this.ecommerceData;
       this.mockData.forEach((h:any)=>{
        h.numberofitems=1
        console.log(h,'746:::')
       })
       console.log(this.ecommerceData,'55::::')
   })

   this.somedata = localStorage.getItem('currentUser');
   this.Data.push(JSON.parse(this.somedata))
    // this.customersinfo = localStorage.getItem('ecomregister' || '[]') ;
    // console.log(this.customersinfo,'123:::')
    // if(this.customersinfo != null){
    //      this.regForm = JSON.parse(this.customersinfo)
    // }
     
    // this.ecomData = this.regForm
    // console.log(this.regForm,'666:::')

     this.ecommerceData = this.products
    this.service.checkaddtocart.subscribe((e:any)=>{
      console.log(e,'98:::')
    });

  }

  filterData(){
  this.mockData =  this.ecommerceData.filter((v:any)=>{
     return  v.title.toLowerCase().includes(this.searchText?.toLowerCase().trim())
    })
    if(this.mockData.length){
      this.newOne = false
    } else{
      this.newOne=true
    }
    console.log('00000',this.products)
  }

  sorting(order:any){

    if(order="asc"){
      this.mockData.sort(
        (a:any,b:any)=>{
          return   a.price > b.price ? -1: 1
        }
      )
    }
   }
   pricesort(order:any){
    if(order== 'dsc'){
      this.mockData.sort(
        (a:any,b:any)=>{
            return a.price > b.price ? 1 :-1
        }
      )
    }
}
GetAllProducts(){
 
  this.http.get('https://fakestoreapi.com/products').subscribe((res:any)=>{
     
  this.ecommerceData = res;
  this.mockData = this.ecommerceData;
  this.mockData.forEach((h:any)=>{
   h.numberofitems=1
   console.log(h,'746:::')
  })
  console.log(this.ecommerceData,'55::::')
})
  // this.mockData =  this.ecommerceData;
  // console.log(this.mockData,'5545::')

 
}
fitlterItem(data:any){

  this.mockData = this.ecommerceData.filter((val:any) =>val.category === data)
}
WomenShoping(){
  this.mockData = this.ecommerceData.filter((val:any) =>val.category === "women's clothing")
  // console.log(this.ecomercedata,'56:::')
}
MensShopping(){
  this.mockData = this.ecommerceData.filter((v:any)=> v.category ==="men's clothing")
}
addtocart(data: any) {
  this.data1.push(data)
  console.log(this.data1,'88:::')
  this.service.addtocartDetails(this.data1)
  console.log(data,'999::');
}
   viewpage(product:any){
    this.service.getDetails(product)
      // this.productdetails = product
      // console.log(this.productdetails,'715:::')
      //  this.ecommerceData.push(this.addtocart)
      //  this.ProductDtls.emit(this.productdetails)
       this.route.navigate(['/viewPage'])
   }

   incranddec(item:any,index:any){
   
    console.log(item,index,'54:::')
     this.productQuantity = this.mockData[index].numberofitems=this.mockData[index].numberofitems+1 
      console.log(this.productQuantity,'14:::')
   }
   decrement(item: any, index: any) {
    if (this.mockData[index].numberofitems > 1) {
        this.mockData[index].numberofitems-=1;
    }
}
}

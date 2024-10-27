import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  addtocart = new BehaviorSubject([]);
  checkaddtocart = this.addtocart.asObservable()
  addtocartDetails(addtocartData:any){
    console.log(addtocartData,'12:::')
    this.addtocart.next(addtocartData)
  }
  // ProductQuantity = new BehaviorSubject([]);
  // AddQuantity = this.ProductQuantity.asObservable()
  // AddQty(qty:any){
  //   console.log(qty,'777:::')
  //   this.ProductQuantity.next(qty)
  // }
  Products = new BehaviorSubject('')
  getDetails(data:any){
    this.Products.next(data)
  }
  addtocartProducts = new BehaviorSubject('');
  productDetails(productdata:any){
          this.addtocartProducts.next(productdata)
  }

}

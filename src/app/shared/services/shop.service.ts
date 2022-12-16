import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartDTO } from '../models/cartDTO.models';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ShopService {


  baseUrl : string = "http://localhost:3000/api/v1"

  listProductShop : Product[] = []
  
  constructor(private httpC : HttpClient) {
    console.log("Service chargé")
  }


  getProduct() : Observable<any>{
    return this.httpC.get(this.baseUrl + "/products")
  }


  saveCart(cartDto : CartDTO[], nameCart : string)
  {
    return this.httpC.post(this.baseUrl + "/carts", { nameCart, cart : cartDto })
  }
}

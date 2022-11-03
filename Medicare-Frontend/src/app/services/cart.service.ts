import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { cart } from "../models/cart.model";

@Injectable()
export class CartService{
    constructor(private httpClient:HttpClient){}

    getCart(username:string | null):Observable<cart[]>{
        return this.httpClient.get<cart[]>(`http://localhost:8899/api/v5/cart/${username}`);
    }

    deleteCart(cartId: number):Observable<cart[]>{
        console.log(cartId)
        return this.httpClient.delete<cart[]>(`http://localhost:8899/api/v5/cart/${cartId}`);
    }
    addCart(username:string | null, medicineId:number){
        return this.httpClient.get(`http://localhost:8899/api/v5/cart/${username}/${medicineId}`);
    }
    

}

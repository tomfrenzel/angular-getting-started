import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  itemAmount = 0;
  addToCart(product){
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItemAmount() {
    for(var product in this.items) {
      if (this.items.hasOwnProperty(product)) {
        this.itemAmount++;
      }
    }
    return this.itemAmount;
  }

  constructor() { }

}
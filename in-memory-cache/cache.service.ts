import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cacheData = {}

  constructor() { }

  get (key: any) {
    if (this.cacheData.hasOwnProperty(key) && this.cacheData[key].val) {
      return this.cacheData[key].val;
    }
  }

  set (key: any, value: any, expiry: any) {

    this.clear(key);
    
    let to: any= false ;
    
    if (expiry && parseInt(expiry) > 0) {
      to = setTimeout( () => { this.clear(key); }, parseInt(expiry) );
    }

    this.cacheData[key] = {
      expiry : expiry,
      val : value,
      timeout: to,
    }

  }

  clear (key: any) {
    if (this.cacheData.hasOwnProperty(key)){
      if(this.cacheData[key].to){
        clearTimeout(this.cacheData[key].to);
      }
      delete this.cacheData[key];
      return true;
    }
  }

}
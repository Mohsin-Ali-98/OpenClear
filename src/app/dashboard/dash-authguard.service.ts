import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashAuthguardService {

  constructor() { }

  gettoken(){  
    return !localStorage.getItem("token");
    }  

}

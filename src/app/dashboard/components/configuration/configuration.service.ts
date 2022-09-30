import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }
  gettoken(){  
    return !localStorage.getItem("token");
    }  
}

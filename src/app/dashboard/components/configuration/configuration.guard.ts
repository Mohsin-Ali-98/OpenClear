import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationGuard implements CanActivate {
  
  constructor( private configurationguard : ConfigurationService ,private router : Router){}
  
  canActivate(): boolean{
    if(this.configurationguard.gettoken()){
      this.router.navigate(['/agent']); 
    }

  
    return this.configurationguard.gettoken();  ;
  }
  
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.configurationguard.gettoken()){
      this.router.navigate(['/agent']); 
    }

  
    return this.configurationguard.gettoken();  ;
  }
}
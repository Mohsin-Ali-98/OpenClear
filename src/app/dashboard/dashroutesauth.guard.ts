import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DashAuthguardService } from './dash-authguard.service';


@Injectable({
  providedIn: 'root'
})
export class DashroutesauthGuard implements CanActivate {
  
  constructor( private DashAuthguardservice: DashAuthguardService , private router : Router){}
  canActivate(): boolean {  
    if (!this.DashAuthguardservice.gettoken()) {  
      this.router.navigate(['/dash']); 
    }  
    
    return this.DashAuthguardservice.gettoken();  
} 

// canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//   if(this.DashAuthguardservice.gettoken()){
//     this.router.navigate(['/agent']); 
//   }
//   }
  
}

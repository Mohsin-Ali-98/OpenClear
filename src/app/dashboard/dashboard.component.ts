import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

public protectedData:any
public loading: boolean=false


  constructor( public router :Router
  ) { }

  Logout(){
    // debugger
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    // this.userSubject.next(null!);
    this.router.navigate(['/login']);
}

  ngOnInit(): void {  
    // this._api.getTypeRequest("user/list").subscribe((res:any)=>{
    //   this.protectedData = res 
    //   console.log(this.protectedData)
    // })
  }

}

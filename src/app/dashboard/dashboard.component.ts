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

  ngOnInit(): void {  
    // this._api.getTypeRequest("user/list").subscribe((res:any)=>{
    //   this.protectedData = res 
    //   console.log(this.protectedData)
    // })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  MatDetails : any = [1]
  containers :any = [1];

  constructor() { }

  addMatDetails = () =>{
    this.MatDetails.push(this.MatDetails.length)
  }

  addContainers = () =>{
    this.containers.push(this.containers.length)
  }

  removeMatDetails  =(i :any) =>{
    var index : number = this.MatDetails.indexOf(i)
    if(index ! = -1 ){
      this.MatDetails.splice(i ,1)
    }
  }

  removeContainerDetails = (i :any) =>{
    var index : number = this.containers.indexOf(i)
    if(index ! = -1 ){
      this.containers.splice(i ,1)
    }
  }

  ngOnInit(): void {
  }

}

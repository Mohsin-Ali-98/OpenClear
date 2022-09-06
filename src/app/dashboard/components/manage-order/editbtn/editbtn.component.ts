import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-editbtn',
  templateUrl: './editbtn.component.html',
  styleUrls: ['./editbtn.component.css']
})
export class EditbtnComponent implements ICellRendererAngularComp,OnInit {



  

  private params!:ICellRendererParams;
  private value!:Date
  agInit(params: ICellRendererParams): void {
    this.params = params;
    console.log(params.value,'btn comp')
  }
getValue(){
  return this.value
}

  btnClickedHandler(params: any) {
    alert(this.params.value);
  }
  ngOnDestroy() {
    // no need to remove the button click handler as angular does this under the hood
  }
  constructor() { }
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}

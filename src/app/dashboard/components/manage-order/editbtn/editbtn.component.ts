import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { SharedServiceService } from 'src/app/dashboard/shared_services/shared-service.service';

@Component({
  selector: 'app-editbtn',
  templateUrl: './editbtn.component.html',
  styleUrls: ['./editbtn.component.css']
})
export class EditbtnComponent implements ICellRendererAngularComp,OnInit {

 private Data = {}

  constructor( public router :Router , public service : SharedServiceService )  { }

  private params!:ICellRendererParams;
  private value!:Date
  agInit(params: ICellRendererParams): void {
    this.params = params;
    console.log(params.value,'btn comp')
  }
getValue(){
  return this.value
}

  btnClickedHandler(params: any ,) {
    // alert(this.params.value);
    this.router.navigate(['/editorder' , {id:this.params.value} ]);

  }
  ngOnDestroy() {
    // no need to remove the button click handler as angular does this under the hood
  }
 
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }

  OrderDelete(){
    console.log(this.params.data.order_id ,"hello")
    let order_id = this.params.data.order_id 
    const selectedData = [this.params.node.data];

    this.Data = {order_id}
    this.params.api.applyTransaction({ remove: selectedData });

    this.service.DeleteOrder(this.Data).subscribe(
      (res:any)=>{
        alert(res.message)
        console.log(res)
      }
    )

  }

  ngOnInit(): void {
  }

}

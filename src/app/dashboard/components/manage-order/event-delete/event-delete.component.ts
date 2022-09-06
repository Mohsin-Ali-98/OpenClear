import { Component, Input, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import { SharedServiceService } from 'src/app/dashboard/shared_services/shared-service.service';
import { GridserviceService } from '../gridservice.service';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements ICellRendererAngularComp {


  @Input() public resultGridList : Array <any> = [];



  public params: any;
  public isNew: any;
  previousData: any;
  public selectedDate: Date = new Date();
  public message: any;
  editeddate: any;


  agInit(params: any): void {
    this.params = params;
}

  constructor(public service: SharedServiceService  , public gridservice:GridserviceService) {
    this.isNew = true;
   }

   public invokeParentMethod() {
    this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
}



refresh(): boolean {
  return false;
}


// onEditClick( date:any) {
//   // debugger
//   // alert('Cell is' + this.params.data.event_dt)
//   // debugger
//   const index = this.params.node.rowIndex;
//   // this.params.cancelOtherRowEditors(index);
//   this.isNew = false;
//   this.previousData = JSON.parse(JSON.stringify(this.params.node.data));
//   let cols = this.params.columnApi.getAllGridColumns();
//   let firstCol = {
//       "colId": ""
//   }
//   if (cols) {
//       firstCol = cols[1];
//   }
//   let rowIndex = this.params.node.rowIndex;
//   this.params.api.setFocusedCell(rowIndex, firstCol.colId);
//    const data = this.params.api.startEditingCell({
//       // rowIndex: rowIndex,
//       // colKey: "row"
//       rowIndex: this.params.rowIndex,
//       colKey: this.params.data.event_dt,

//       // suppressClickEdit:true

//   });


//   this.gridservice.currentApprovalStageMessage.subscribe((msg: any) => this.editeddate = msg)
  
//   console.log (this.editeddate,"here is the event date in editbutton")  

//   // console.log (data)

//   // this.params.getColumn('employeeName').getColDef().editable = false;
// }



onUpdateClick() {

 let data = [this.params];
 let event_id= this.params.data.event_id
 let order_id =this.params.data.order.order_id

//  console.log(data , "edit here")
 this.gridservice.currentApprovalStageMessage.subscribe((msg: any) => this.editeddate = msg)
  
  // console.log (this.editeddate,"here is the event date in editbutton") 
  
  this.service.UpdateEvent(order_id , event_id , this.editeddate).subscribe(
    (res:any)=>{
      alert(res.message)
    }
  )
  
 return data
}


// public onCancelClick() {
//   this.isNew = true;
//   this.params.node.setData(this.previousData);
//   this.params.api.stopEditing(true);
// }


onDeleteClick() {
  // debugger
  const selectedData = [this.params.node.data];
  console.log(selectedData);
  // let ordereventid =this.params.data.order_event_id
  let event_id= this.params.data.event_id
  let order_id =this.params.data.order.order_id

  this.params.api.applyTransaction({ remove: selectedData });


  this.service.DeleteEvent(order_id , event_id ).subscribe(
    (res:any)=>{
      alert(res.message)
      console.log(res)
    }
  )

  
}

  // private params: any;
  




















  // agInit(params: any): void {
  //   this.params = params.data;
  //   console.log(this.params,'btn comp')
  // }


  // btnClickedHandler(params: any) {
  //   this.params.clicked(this.params);
  //   alert(this.params)
  // }




//   onEditButtonClick(params:any)
//   {
//    this.api.startEditingCell({
//       rowIndex: params.rowIndex,
//       colKey: 'make'
//     });
//   }


  
// onSaveButtonClick(params:any)
// {
//  this.api.stopEditing();
// }

// onDeleteButtonClick(params:any)
// {
//   debugger;
//  this.api.updateRowData({remove: [params.data]});
// }




  
  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Grid, GridOptions, RowClassRules } from 'ag-grid-community';
import { SharedServiceService } from '../../shared_services/shared-service.service';
import { PopupComponent } from './popup/popup.component';
// import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  [x: string]: any;
  Orders: any;

 ModalColumnData = [
      {headerName: 'PONumber', field: 'po_number' , },
      {headerName: 'LineNo', field: 'po_line_number'},
      {headerName: 'FileNo', field: 'file_number', editable: true},
      {headerName: 'BLNumber', field: 'bl_number' , } ,
      {headerName: 'OriginPort', field: 'order_shipping_details'},
      {headerName: 'DestinationPort', field: 'order_shipping_details'},
      {headerName: 'AssignedAgent', field: 'AssignedAgent',
      cellRenderer: (AssignedAgent:any) => `<p onclick=" open();" >${AssignedAgent.value}</p>` },
      {headerName: 'Container Number', field: 'order_container_details'},
      // {headerName: 'Status', field: 'Status'},
      {headerName: 'DemmurageStatus', field: 'demurrage_free_days'},
      // {headerName: 'DemurageDaysLeft', field: 'DemurageDaysLeft'},
      {headerName: 'DetentionStatus', field: 'detention_free_days'},
      // {headerName: 'DetentionDaysLeft', field: 'DetentionDaysLeft'},
      {headerName: 'PlanETD', field: 'estimated_departure_time'},
      {headerName: 'Supplier', field: 'supplier_id'},
]
Data: any[] = [];


  public gridOptions!: GridOptions;

    constructor( private service:SharedServiceService) { 

      this.gridOptions = <GridOptions>{    
        defaultColDef: {
        resizable: true,
        sortable: false,
        filter: false,
        headerClass:  "my-header-class",
        
      }
      ,};

      

    }

  

    
//   public gridOptions: any = {
   
    // defaultColDef: {
    //   resizable: true,
    //   sortable: false,
    //   filter: false,
    //   headerClass:  "my-header-class",
      
    // },

//     // ModalColumnData : [
//     //   {headerName: 'PONumber', field: 'PONumber' , },
//     //   {headerName: 'LineNo', field: 'LineNo'},
//     //   {headerName: 'FileNo', field: 'FileNo', editable: true},
//     //   {headerName: 'BLNumber', field: 'BLNumber' ,
//     //     cellRenderer: PopupComponent } ,
//     //   {headerName: 'OriginPort', field: 'OriginPort'},
//     //   {headerName: 'DestinationPort', field: 'DestinationPort'},
//     //   {headerName: 'AssignedAgent', field: 'AssignedAgent',
//     //   cellRenderer: (AssignedAgent:any) => `<p onclick=" open();" >${AssignedAgent.value}</p>` },
//     //   {headerName: 'Container Number', field: 'LineNo'},
//     //   {headerName: 'Status', field: 'Status'},
//     //   {headerName: 'DemmurageStatus', field: 'DemmurageStatus'},
//     //   {headerName: 'DemurageDaysLeft', field: 'DemurageDaysLeft'},
//     //   {headerName: 'DetentionStatus', field: 'DetentionStatus'},
//     //   {headerName: 'DetentionDaysLeft', field: 'DetentionDaysLeft'},
//     //   {headerName: 'PlanETD', field: 'PlanETD'},
//     //   {headerName: 'Supplier', field: 'Supplier'},
   
//     // ],

//     // ModalrowData:[
//     //       {
//     //       PONumber: '123', LineNo: '123', FileNo: 123-1, BLNumber:"MSK123456",OriginPort:"China",
   
//     //       DestinationPort:"Karachi",AssignedAgent:"El Fricao" ,NOofContainer:2 , Status:"AgentAssigned",
          
//     //       DemmurageStatus:"OK", DemurageDaysLeft:2 , DetentionStatus:"OK" , DetentionDaysLeft:9, 
          
//     //       PlanETD:"05-Oct-2021" , Supplier:"ABC" , },
          
//     //       {
//     //         PONumber: '789', LineNo: '789', FileNo: 789-1, BLNumber:"MSK123458" ,OriginPort:"China",
          
//     //         DestinationPort:"Karachi",AssignedAgent:"Qamar Traders" ,NOofContainer:5 , Status:"AgentAssigned",
            
//     //         DemmurageStatus:"Demurrage", DemurageDaysLeft:-5 , DetentionStatus:"Demurrage" , DetentionDaysLeft:-1, 
            
//     //         PlanETD:"07-Sep-2021" , Supplier:"XYZ"
//     //       },
//     //       {
//     //         PONumber: '123', LineNo: '123', FileNo: 123, BLNumber:"MSK123456",OriginPort:"China",
          
//     //         DestinationPort:"Karachi",AssignedAgent:"El Fricao" ,NOofContainer:2 , Status:"AgentAssigned",
            
//     //         DemmurageStatus:"OK", DemurageDaysLeft:2 , DetentionStatus:"OK" , DetentionDaysLeft:9, 
            
//     //         PlanETD:"05-Oct-2021" , Supplier:"ABC"
//     //       }
//     // ]



    // ModalColumnData : [
    //   {headerName: 'PONumber', field: 'po_number' , },
    //   {headerName: 'LineNo', field: 'po_line_number'},
    //   {headerName: 'FileNo', field: 'file_number', editable: true},
    //   {headerName: 'BLNumber', field: 'bl_number' ,
    //     cellRenderer: PopupComponent } ,
    //   // {headerName: 'OriginPort', field: 'OriginPort'},
    //   // {headerName: 'DestinationPort', field: 'DestinationPort'},
    //   // {headerName: 'AssignedAgent', field: 'AssignedAgent',
    //   // cellRenderer: (AssignedAgent:any) => `<p onclick=" open();" >${AssignedAgent.value}</p>` },
    //   // {headerName: 'Container Number', field: 'LineNo'},
    //   // {headerName: 'Status', field: 'Status'},
    //   // {headerName: 'DemmurageStatus', field: 'DemmurageStatus'},
    //   // {headerName: 'DemurageDaysLeft', field: 'DemurageDaysLeft'},
    //   // {headerName: 'DetentionStatus', field: 'DetentionStatus'},
    //   // {headerName: 'DetentionDaysLeft', field: 'DetentionDaysLeft'},
    //   // {headerName: 'PlanETD', field: 'PlanETD'},
    //   // {headerName: 'Supplier', field: 'Supplier'},
   
    // ],

//     ModalrowData:[ this.Order ]
  


//  };
 

   
  public rowClassRules: RowClassRules = {
    // row style function
    'gridrowstyle': (params) => {
      var FileNo = params.data.FileNo;
      return FileNo

    },
  };


 
 
  public header = { 
    background: "black",
    color:"yellow"
  };

open(){
  this.open();
  // console.log("hello")
}

  

  
  // defaultColDef = {
  //   sortable: true
  // };
 




  ngOnInit(): void {
    // fetch('https://www.ag-grid.com/example-assets/row-data.json')
    // .then(result => result.json())
    // .then(rowData => this.rowData = rowData);
    // console.log(this.rowData ,"hello")

    this.prepareRowData();
    
  }

  prepareRowData() {
    // API Call for getting TV-Shows
    this.service.Orders()
      .subscribe((response: any) => {
        const data = response;
        console.log('Orders', data);
        this.Data.push(data)

        this.gridOptions.columnDefs= this.ModalColumnData
        this.gridOptions.rowData= this.Data[0]
   
       // Setting Grid RowData using api response
      //  this.gridOptions.api.setRowData(shows);
      // this.gridOptions.api?.setRowData(data)
   
     });
   }

  

   
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, Grid, GridOptions, RowClassRules } from 'ag-grid-community';
import moment from 'moment';
import { SharedServiceService } from '../../shared_services/shared-service.service';
import { EditbtnComponent } from './editbtn/editbtn.component';
import { PopupComponent } from './popup/popup.component';
// import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
 public colDefs: any 
 public gridApi:any
 public gridColumnApi : any 
 public searchValue:any
 public sortingOrder :any
 public api :any


  public gridOptions: GridOptions ={
    rowHeight:500
  };
  public columnDefs: ColDef[] =[
          {headerName: 'PONumber', field: 'po_number' , sortingOrder:['desc' ,'asc'] },
          {headerName: 'LineNo', field: 'po_line_number'},
          {headerName: 'FileNo', field: 'file_number',   resizable: false,
          sortable: false,
          filter: false,},
          {headerName: 'BLNumber', field: 'bl_number' , } ,
    
                {
                  headerName: 'Event Details',
                  field: "order_id",
                  cellRenderer: PopupComponent,              
                  valueFormatter: (params:any) => params.data?.order_shipping_details[0]?.destinationlocationid?.location_name
                },
  
         
          {headerName: 'Container Number', field: 'order_container_details',
          valueFormatter: (params:any) =>  params.data?.order_container_details?.length
          
          },
          {headerName: 'DemmurageStatus', field: 'demurrage_free_days'},
          {headerName: 'DetentionStatus', field: 'detention_free_days'},
          {headerName: 'PlanETD', field: 'estimated_departure_time',  valueFormatter: this.dateFormatter,},
          {headerName: 'PlanETA', field: 'estimated_arrival_time' ,  valueFormatter: this.dateFormatter,},       
          {headerName: 'Actions', field: 'order_id' , 
          cellRenderer: EditbtnComponent,
           minWidth: 150,
          },
    ]
    public defaultColDef: ColDef = {
      resizable: false,
      editable:false,
      sortable: false,
      filter: false,
      // width:100
    };
  frameworkComponents!: { btnCellRenderer: any; };

    constructor( private service:SharedServiceService, public router :Router )  { 
      

  //     this.gridOptions = <GridOptions>{    
  //       defaultColDef: {
  //       resizable: false,
        // sortable: false,
        // filter: false,
  //       headerClass:  "my-header-class",
  //       sortingOrder: ["desc"],
  //       // enableRowGroup: true,
  //       // enablePivot: true,
  //       // enableValue: true,
        
  //     }
  //     };

      
  //     this.colDefs = [
  //       {headerName: 'PONumber', field: 'po_number' , sortingOrder:['desc' ,'asc'] },
  //       {headerName: 'LineNo', field: 'po_line_number'},
  //       {headerName: 'FileNo', field: 'file_number',   resizable: false,
  //       sortable: false,
  //       filter: false,},
  //       {headerName: 'BLNumber', field: 'bl_number' , } ,
  
  //             {
  //               headerName: 'Event Details',
  //               field: "order_id",
  //               cellRenderer: PopupComponent,              
  //               valueFormatter: (params:any) => params.data?.order_shipping_details[0]?.destinationlocationid?.location_name
  //             },

       
  //       {headerName: 'Container Number', field: 'order_container_details',
  //       valueFormatter: (params:any) =>  params.data?.order_container_details?.length
        
  //       },
  //       {headerName: 'DemmurageStatus', field: 'demurrage_free_days'},
  //       {headerName: 'DetentionStatus', field: 'detention_free_days'},
  //       {headerName: 'PlanETD', field: 'estimated_departure_time',  valueFormatter: this.dateFormatter,},
  //       {headerName: 'PlanETA', field: 'estimated_arrival_time' ,  valueFormatter: this.dateFormatter,},       
  //       {headerName: 'Actions', field: 'order_id' , 
  //       cellRenderer: EditbtnComponent,
  //        minWidth: 150
  //       },
  // ]
  
  // this.sortingOrder=["desc" , "asc" ]

    }

  

   
  public rowClassRules: RowClassRules = {
    // row style function
    'gridrowstyle': (params) => {
      var FileNo = params.data.file_number;
      return FileNo

    },
  };


 
 
  public header = { 
    background: "black",
    color:"yellow"
  };


  

  
  // defaultColDef = {
  //   sortable: false,
  //   resizable: false,
  //       filter: false,
  // };
 

  open(){
    console.log('hello')
  }

  dateFormatter(params:any){
    moment.updateLocale("es", {
      invalidDate: "N/A"
    });
    return moment(params.value).format('D-MM-YYYY hh:mm:ss a')
    
    }


  ngOnInit(): void {    
    // this.prepareRowData();
    this.onGridReady
    
  }


  

  onClickEdit(params:any){
    //  this.router.navigate(['/login']);
    alert('clock')
    console.log(params)
  }


  onGridReady(params: any) {
    // debugger
    this.gridApi=params.api;
    this.gridColumnApi=params.columnapi
    
    // API Call
    this.service.Orders()
    .subscribe((response: any) => {
      const data = Object.values(response.data.order)

      params.api.setRowData(Object.values(data)) 

      console.log('Orders', data );
 
   });
  
  
  }













  quickSearch(){
    this.gridApi.setQuickFilter(this.searchValue)
    console.log(this.searchValue)
  }



  navigate(){
    alert('clicked')
  }

   
}




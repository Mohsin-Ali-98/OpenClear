import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grid, GridOptions, RowClassRules } from 'ag-grid-community';
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

//  ModalColumnData = [
//       {headerName: 'PONumber', field: 'po_number' , },
//       {headerName: 'LineNo', field: 'po_line_number'},
//       {headerName: 'FileNo', field: 'file_number', editable: true},
//       {headerName: 'BLNumber', field: 'bl_number' , } ,
//       {headerName: 'OriginPort', field: 'order_shipping_details[0].vessel_name'},
//       {headerName: 'DestinationPort', field: 'order_shipping_details'},
//       {headerName: 'AssignedAgent', field: 'AssignedAgent',
//       cellRenderer: (AssignedAgent:any) => `<p onclick=" open();" >${AssignedAgent.value}</p>` },
//       {headerName: 'Container Number', field: 'order_container_details'},
//       // {headerName: 'Status', field: 'Status'},
//       {headerName: 'DemmurageStatus', field: 'demurrage_free_days'},
//       // {headerName: 'DemurageDaysLeft', field: 'DemurageDaysLeft'},
//       {headerName: 'DetentionStatus', field: 'detention_free_days'},
//       // {headerName: 'DetentionDaysLeft', field: 'DetentionDaysLeft'},
//       {headerName: 'PlanETD', field: 'estimated_departure_time'},
//       {headerName: 'Supplier', field: 'supplier_id'},
// ]



  public gridOptions!: GridOptions;
  frameworkComponents!: { btnCellRenderer: any; };

    constructor( private service:SharedServiceService, public router :Router )  { 
      

      this.gridOptions = <GridOptions>{    
        defaultColDef: {
        resizable: true,
        sortable: true,
        filter: true,
        headerClass:  "my-header-class",
        sortingOrder: ["desc"],
        // enableRowGroup: true,
        // enablePivot: true,
        // enableValue: true,
        
      }
      };

      
      this.colDefs = [
        {headerName: 'PONumber', field: 'po_number' , sortingOrder:['desc' ,'asc'] },
        {headerName: 'LineNo', field: 'po_line_number'},
        {headerName: 'FileNo', field: 'file_number', editable: true},
        {headerName: 'BLNumber', field: 'bl_number' , } ,
        {
          headerName: 'OriginPort',
          field: "location_name",
          valueFormatter: (params:any) => params.data?.order_shipping_details[0]?.originlocationid?.location_name
  
        },
              // {headerName: 'DestinationPort', field: 'order_shipping_details'},
  
              {
                headerName: 'Event Details',
                field: "order_id",
                cellRenderer: PopupComponent,
                cellRendererParams: {
                  function(field: any , data:any ) {
                   
                 
                    console.log(`${field} was clicked`);  
                    // debugger
                    // router.navigate(['/editorder' , {id:field} ]);
                    
                    console.log(data?.order_id)   

                  }
                },
                
        
                valueFormatter: (params:any) => params.data?.order_shipping_details[0]?.destinationlocationid?.location_name
              },     
        // {headerName: 'AssignedAgent', field: 'AssignedAgent',
        // cellRenderer: (AssignedAgent:any) => `<p onclick=" open();" >${AssignedAgent.value}</p>` },
       
        {headerName: 'Container Number', field: 'order_container_details',
        valueFormatter: (params:any) =>  params.data?.order_container_details?.length
        
        },
        // {headerName: 'Status', field: 'Status'},
        {headerName: 'DemmurageStatus', field: 'demurrage_free_days'},
        // {headerName: 'DemurageDaysLeft', field: 'DemurageDaysLeft'},
        {headerName: 'DetentionStatus', field: 'detention_free_days'},
        // {headerName: 'DetentionDaysLeft', field: 'DetentionDaysLeft'},
        {headerName: 'PlanETD', field: 'estimated_departure_time'},
        {headerName: 'PlanETA', field: 'estimated_arrival_time'},
        // {headerName: 'Supplier', field: 'supplier_id'},
       
        {headerName: 'Actions', field: 'order_id' , 
        //  cellRenderer: (AssignedAgent:any) => `<span ><i class="material-icons" >edit</i>`
        cellRenderer: EditbtnComponent,
        cellRendererParams: {
          clicked: function(field: any , data:any ) {
           
         
            // alert(`${field} was clicked`);  
            // debugger
            router.navigate(['/editorder' , {id:field} ]); 
            
            // console.log(data?.order_id)   
          }
        },
        // cellRendererParams: {
        //   onClick: this.onClickEdit.bind(this)
        // },
        minWidth: 150
        
        },
  ]
  
  this.sortingOrder=["desc" , "asc" ,null]

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


  

  
  defaultColDef = {
    sortable: true
  };
 

  open(){
    console.log('hello')
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

  //   this.service.Orders()
  //     .subscribe( data=> {
  //   params.api.setRowData(data) 
  //   console.log(data) 
   
  //    });
  //  }

  // prepareRowData() {
  //   // API Call for getting TV-Shows
  //   this.service.Orders()
    //   .subscribe((response: any) => {
    //     const data = response;


    //     this.gridOptions.columnDefs= this.ModalColumnData
    //     this.gridOptions.rowData= data
    //     console.log('Orders', data);
   
    //    // Setting Grid RowData using api response
    //   //  this.gridOptions.api.setRowData(shows);
    //   // this.gridOptions.api?.setRowData(data)
   
    //  });
  //  }

  

   
}



// rowGroup: true,
// hide: true,
// valueGetter: this.OrgportValueGetter,
// keyCreator: this.OrgportValueGetter,


// OrgportKeyCreator(params: KeyCreatorParams) {
// var order_shipping_details = params.value;
// return order_shipping_details.vessel_name;
// }
// OrgportValueGetter(params: ValueGetterParams) {
// // hack the data  - replace the country with an object of country name and code
// var igmnum = params.data.order_shipping_details.igm_number;
// // var countryCode = countryName.substring(0, 2).toUpperCase();
// return {
// name: igmnum
// };

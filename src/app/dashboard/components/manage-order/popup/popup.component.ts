import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, RowClassRules } from 'ag-grid-community';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  constructor(private modalService : NgbModal){}

  public Arr :any[] = []
  public Shipper!: string;

  public cellValue!: string;
  

    
  public gridOptions: any = {
   
    defaultColDef: {
      resizable: true,
      sortable: false,
      filter: false,
      headerClass:  "my-header-class",
      
    },

    ModalColumnData : [
      {headerName: 'Event_Name', field: 'Event_Name' , },
      {headerName: 'Event_DateTime', field: 'Event_DateTime'},
      {headerName: 'Create_DateTime', field: 'Create_DateTime'},
      {headerName: 'Created_By', field: 'Created_By'  } ,
      {headerName: 'Comments', field: 'Comments'},
      {headerName: 'Attachment', field: 'Attachment'},   
    ],

    ModalRowData:[
          {
            Event_Name: 'Order Created', Event_DateTime: '15-Aug-2021', Create_DateTime: '15-Aug-2021', Created_By:"Colgate User",Comments:"",
   
            Attachment:""},
      {
              Event_Name: 'LC/BC Initiated date', Created_By:"Colgate User",Comments:"",
     
              Attachment:""},
              
       {
         Event_Name: 'LC/BC Received date', Event_DateTime: '16-Aug-2021', Create_DateTime: '16-Aug-2021', Created_By:"Colgate User",Comments:"",
         Attachment:""
      },
       {
         Event_Name: 'Shipping guarantee Req date', Created_By:"Colgate User",Comments:"",
         Attachment:""
        },

        {
          Event_Name: 'Shipping guarantee Recv date',Event_DateTime: '16-Aug-2021', Create_DateTime: '16-Aug-2021', Created_By:"Colgate User",Comments:"",
          Attachment:""
         },
         {
          Event_Name: 'Clearing Agent Assigned', Created_By:"Colgate User",Comments:"",
          Attachment:""
         },
         {
          Event_Name: 'Clearing Agent Acceptance',Event_DateTime: '20-Aug-2021', Create_DateTime: '20-Aug-2021', Created_By:"Colgate User",Comments:"",
          Attachment:""
         },
         {
          Event_Name: 'Shipment Update', Created_By:"Colgate User",Comments:"",
          Attachment:""
         },
         {
          Event_Name: 'Copy Documents Received',Event_DateTime: '26-Aug-2021', Create_DateTime: '26-Aug-2021', Created_By:"Colgate User",Comments:"",
          Attachment:""
         },
         {
          Event_Name: 'Actual ETD', Created_By:"Agent",Comments:"",
          Attachment:""
         },
         {
          Event_Name: 'Original Documents Recived', Created_By:"Colgate User",Comments:"",
          Attachment:""
         },
         {
          Event_Name: 'Vessel Arrival',Event_DateTime: '29-Aug-2021', Create_DateTime: '29-Aug-2021', Created_By:"Agent",Comments:"",
          Attachment:""
         },
         {
          Event_Name: 'EIF approval date', Created_By:"Agent",Comments:"",
          Attachment:""
         },
         {
          Event_Name: 'GD Filing',Event_DateTime: '30-Sep-2021', Create_DateTime: '30-Sep-2021', Created_By:"Agent",Comments:"",
          Attachment:""
         },

         {
          Event_Name: 'Duty Request Submitted',Event_DateTime: '30-Sep-2021', Create_DateTime: '30-Sep-2021', Created_By:"Agent",Comments:"",
          Attachment:""
         },
         {
          Event_Name: 'Duty Pay Order Received',Event_DateTime: '02-Oct-2021', Create_DateTime: '02-Oct-2021', Created_By:"Agent",Comments:"PO# K456966",
          Attachment:""
         },
         {
          Event_Name: 'Duty Pay Order Submitted',Event_DateTime: '02-Oct-2021', Create_DateTime: '02-Oct-2021', Created_By:"Agent",Comments:"",
          Attachment:""
         },
         {
          Event_Name: 'xamination Marked',Event_DateTime: '02-Oct-2021', Create_DateTime: '02-Oct-2021', Created_By:"Agent",Comments:"",
          Attachment:""
         },

    ]


 };

 
 public rowClassRules: RowClassRules = {
  // row style function
  'gridrowstyle': (params) => {
    var FileNo = params.data.FileNo;
    return FileNo

  },
};




  
  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
    this.Shipper = this.getValueToDisplay(params.data.DemurageDaysLeft);  
    this.Arr.push(params.data)
    console.log(this.Arr[0])
  }

  // gets called whenever the user gets the cell to refresh
  refresh(params: ICellRendererParams) {
    // set value into cell again
    this.cellValue = this.getValueToDisplay(params);
    this.Shipper = this.getValueToDisplay(params);  
    return true;
  }


  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

  closeModal!: String


triggerModal (content:any){
  this.modalService.open(content, {ariaLabelledBy:"modal-basic-title"}).result.then((res)=>{
    this.closeModal = `Closed wuth :${res}`
  },(res)=>{
    this.closeModal=`Dismissed${this.getDismissReason(res)}`
  })
}


private getDismissReason (reason : any){
  if(reason === ModalDismissReasons.ESC){
    return'by pressing ESC'
  } else if(reason === ModalDismissReasons.BACKDROP_CLICK){
    return"by clicking on a backdrop"
  }else{
    return `with${reason}`
  }
}


ngOnInit(): void { }

}

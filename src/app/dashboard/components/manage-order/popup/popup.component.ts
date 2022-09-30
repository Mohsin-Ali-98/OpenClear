import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { GridOptions, ICellRendererParams, RowClassRules } from 'ag-grid-community';
import { param } from 'jquery';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { SharedServiceService } from 'src/app/dashboard/shared_services/shared-service.service';
import { EditbtnComponent } from '../editbtn/editbtn.component';
import { EventDeleteComponent } from '../event-delete/event-delete.component';
import { EventEditComponent } from '../event-edit/event-edit.component';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  public Arr: any[] = []
  EventList: any[] = []
  public Shipper!: string;
  public params: any;

  public oid: any

  public EventName: any

  public OrderEvents: any[] = []

  public gridApi: any
  public gridOptions!: GridOptions;
  public gridColumnApi: any
  public colDefs: any
  public sortingOrder: any

  public context: any;
  public frameworkComponents: any;
  public editType: any;

  public cellValue!: string;

  public Date!: string
  public ponumber!:[]
  public filenumber!:[]
  public blnumber!:[]



  // dateNow: Date = new Date();
  // dateNowISO = this.dateNow.toISOString();

  constructor(private modalService: NgbModal, public service: SharedServiceService) {


    this.gridOptions = <GridOptions>{

      defaultColDef: {
        resizable: true,
        sortable: true,
        filter: true,
        headerClass: "my-header-class",



        ////////////////////////
        sortingOrder: ["asc", "desc"],
        stopEditingWhenGridLosesFocus: false,
        enableFilter: true,




        //////////////////
        onRowEditingStarted: (params: any) => {
          params.api.refreshCells({
            columns: ['action'],
            rowNodes: [params.node],
            force: true,
          });
        },
        onRowEditingStopped: (params: any) => {
          params.api.refreshCells({
            columns: ['action'],
            rowNodes: [params.node],
            force: true,
          });
        },


      },
      suppressClickEdit: true,
    }

    this.colDefs = [
      { headerName: 'Event_Name', field: 'event.event_name', },
      {
        hezaderName: 'Event_DateTime', field: 'event_dt',
        valueFormatter: this.dateFormatter,
        cellRenderer: EventEditComponent,
        cellRendererParams: {
          // clicked: function(field: any , data:any ) { 
          //  field
          // }

        }
        ,
        valueGetter: this.GetterValue,

        valueSetter: this.NewValue



      },

      //     // //////////// CHANGE UPDATE DATE AND CREATE DATE AFTER EVENT EDIT DONE

      //  },

      {
        headerName: 'Create_DateTime', field: 'create_dt',
        valueFormatter: this.dateFormatter,


        // cellRenderer: (data:any) => {
        //  debugger
        //   return moment(data.create_dt).format('D-MM-YYYY, h:mm:ss a')
        // }
      },
      {
        headerName: 'Created_By', field: 'user.first_name&user.last_name',
        valueGetter: this.fullNameGetter
      },

      {
        headerName: 'Action', field: 'action',


        cellRenderer: EventDeleteComponent,

      
        // width:"100 rem"
      },
    ],


      this.sortingOrder = ["desc", "asc", null]

    // public items: any;



    this.editType = "fullRow";

    this.frameworkComponents = {
      rowEditCRenderer: EventDeleteComponent

    };

  };




  public rowClassRules: RowClassRules = {
    // row style function
    'gridrowstyle': (params) => {
      var FileNo = params.data.FileNo;
      return FileNo
    },
  };

  

  dateFormatter(params: any) {
    return moment(params.value).format('MM/DD/YYYY hh:mm A')
  }

  // cancelOtherRowEditors(currentRowIndex:any) {
  //   const renderers = this.gridApi.getCellRendererInstances();
  //   renderers.forEach(function(renderer:any) {
  //     if(!renderer._agAwareComponent.isNew && 
  //       currentRowIndex !== renderer._params.node.rowIndex) {
  //       renderer._agAwareComponent.onCancelClick();
  //     }
  //   });
  // }

  // onCellClicked(params:any) {
  //   if(params.node.field !== 'action') {
  //     this.cancelOtherRowEditors(params.node.rowIndex);
  //   }
  // }

  onCellValueChanged(event: any) {
    // console.log('Data after change is', event.data);
  }


  ////////////////////////////date picker

  // public Components = {
  //   /* custom cell editor component*/
  //   datePicker: this.getDatePicker()
  // };





  // public getDatePicker() {
  //   function Datepicker() { }
  //   Datepicker.prototype.init = function (params:any) {
  //       this.eInput = document.createElement("input");
  //       this.eInput.value = params.value;
  //       $(this.eInput).datetimepicker({ dateFormat: "D-MM-YYYY hh:mm:ss a" });
  //   };
  //   Datepicker.prototype.getGui = function () {
  //       return this.eInput;
  //   };
  //   Datepicker.prototype.afterGuiAttached = function () {
  //       this.eInput.focus();
  //       this.eInput.select();
  //   };
  //   Datepicker.prototype.getValue = function () {
  //       return this.eInput.value;
  //   };
  //   Datepicker.prototype.destroy = function () { };
  //   Datepicker.prototype.isPopup = function () {
  //       return false;
  //   };
  //   return Datepicker;
  // }

  // onCellClicked(params:any) {
  //   // Handle click event for action cells
  //   if (
  //     params.column.colId === 'action' &&
  //     params.event.target.dataset.action
  //   ) {
  //     let action = params.event.target.dataset.action;

  //     if (action === 'edit') {
  //       params.api.startEditingCell({
  //         rowIndex: params.node.rowIndex,
  //         // gets the first columnKey
  //         colKey: params.columnApi.getDisplayedCenterColumns()[0].colId,
  //       });
  //     }

  //     if (action === 'delete') {
  //       params.api.applyTransaction({
  //         remove: [params.node.data],
  //       });
  //     }

  //     if (action === 'update') {
  //       params.api.stopEditing(false);
  //     }

  //     if (action === 'cancel') {
  //       params.api.stopEditing(true);
  //     }
  //   }
  // }

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {

    // this.cellValue = this.getValueToDisplay(params);
    // this.Shipper = this.getValueToDisplay(params.data.DemurageDaysLeft);  
    // this.Arr.push(params.data)
    // console.log(this.Arr[0])
    this.params = params;

    // console.log(this.oid,'params are here')
  }

  GetterValue(params: any) {
    // console.log(params.data.event , "GETTER HERE")

    return params.data.event_dt;
  }

  NewValue(params: any) {
    // console.log(params.newValue , "NEW VALUE HERE")
    params.data.event_dt = params.newValue;
  }

  btnClickedHandler(params: any) {
    this.params.clicked(this.params.value);
    // console.log(params.data ,"here are params data for event")
  }

  fullNameGetter(params: any) {
    return params.data.user.first_name + ' ' + params.data.user.last_name + ' ';
  }

  // gets called whenever the user gets the cell to refresh
  refresh(params: ICellRendererParams) {
    // set value into cell again
    this.cellValue = this.getValueToDisplay(params);
    this.Shipper = this.getValueToDisplay(params);
    // console.log(params)
    return true;
  }


  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

  closeModal!: String


  triggerModal(content: any, params: ICellRendererParams) {
    // console.log(params.data.order_events[0].event.event_name)
    this.EventName = params.data
    this.oid = this.params.value
    // console.log(this.oid,"here is order id")


    this.service.getEventList(this.oid).subscribe((res: any) => {
      this.EventList = res.data.events
      // console.log(this.EventList , "here are event list")
    })



    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" }).result.then((res) => {
      this.closeModal = `Closed wuth :${res}`
    }, (res) => {
      this.closeModal = `Dismissed${this.getDismissReason(res)}`
    })


    this.params.clicked(this.params.value);





  }


  private getDismissReason(reason: any) {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC'
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop"
    } else {
      return `with${reason}`
    }
  }


  Eventselected: any = {}


  AddEvent() {
    debugger
    // console.log(this.Eventselected ,"here is event selected")

    this.Eventselected.order_id = this.params.value


    // console.log(this.Eventselected ,"combined events")

    this.service.AddEvent(this.Eventselected)
      .pipe(first()).subscribe((response: any) => {
        // console.log(response)
        alert(response.message)

        this.Eventselected = {}
        this.service.getEventbyOrder(this.oid)
        .subscribe((response: any) => {
          debugger
          const data = response.data.events
  
          this.gridApi.setRowData(data)
  
  
          console.log('Orders with events on add buttons', (response));
  
          this.ponumber = data[0].order.po_number
          this.filenumber = data[0].order.file_number
          this.blnumber = data[0].order.bl_number
          console.log(this.ponumber,"arraydata")
          console.log(this.filenumber,"filedata")
          console.log(this.blnumber,"bldata")
  
        });
      })


      


    // .subscribe(
    //     response => {
    //         console.log("Event INSTERED")
    //         console.log(response)
    //         alert(response)
    //         this.Eventselected={}
    //     },
    //     error => {
    //         console.log(error)
    //     });

  }


  GetAllEventsByOrder(params: any) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnapi

    // API Call
    this.service.getEventbyOrder(this.oid)
      .subscribe((response: any) => {
        debugger
        const data = response.data.events

        params.api.setRowData(data)


     
        params.api.sizeColumnsToFit(); 

        console.log('Orders with events', (response));

        this.ponumber = data[0].order.po_number
        this.filenumber = data[0].order.file_number
        this.blnumber = data[0].order.bl_number
        console.log(this.ponumber,"arraydata")
        console.log(this.filenumber,"filedata")
        console.log(this.blnumber,"bldata")

      });
  }


  ngOnInit(): void {


  }




}



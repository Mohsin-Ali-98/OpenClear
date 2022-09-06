import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';
import { GridserviceService } from '../gridservice.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements ICellEditorAngularComp, AfterViewInit  {
  private params!: ICellEditorParams;
  public value!: number;

  @ViewChild('input', { read: ViewContainerRef })
  public input!: ViewContainerRef;


  ngAfterViewInit() {
    // focus on the input
    debugger
    // setTimeout(() => this.input.element.nativeElement.focus());
    this.params = this.EventEdit

  }
  public EventEdit: any ={}

  agInit(params: ICellEditorParams): void {
    debugger
    this.EventEdit = params.data.event_dt;

    // this.value = parseInt(this.params.value);
  }
  constructor( public gridservice : GridserviceService ){}


  getValue() {
   
    debugger
    return this.EventEdit
  }


  isCancelBeforeStart() {
    return false;
  }

  change($event :any) {
    this.EventEdit = $event;
    console.log(this.EventEdit ,"here are the events");
    // alert(this.EventEdit)
    this.gridservice.updateApprovalMessage(this.EventEdit)
}


}



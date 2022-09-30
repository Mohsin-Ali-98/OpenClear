import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgentmodalComponent } from './agentmodal/agentmodal.component';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {



  closeModal!: String

  constructor(private modalService: NgbModal,) { }
  
  
  open() {
    const modalRef = this.modalService.open(AgentmodalComponent);
    modalRef.componentInstance.my_modal_title = 'I your title';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }
  
  
  triggerModal() {

    this.modalService.open( { ariaLabelledBy: "modal-basic-title" }).result.then((res) => {
      this.closeModal = `Closed wuth :${res}`
    }, (res) => {
      this.closeModal = `Dismissed${this.getDismissReason(res)}`
    })

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



  columnDefs = [{ field: "ClearingAgentCode" },
   { field: "ClearingAgentName" },
    { field: "Address" },
    { field: "ContactName" },
     { field: "ContactEmail" },
     { field: "ContactNumber" }, 
     { field: "Action" }];

  rowData = [
    { ClearingAgentCode: "123", ClearingAgentName: "Hassan", Address: "North Nazimabad Karachi" , ContactName:"Hassan" , ContactEmail:"Hassan@gmail.com" , ContactNumber:"0333 4848484"},
    { ClearingAgentCode: "789", ClearingAgentName: "Fawad", Address: "North Margalla Islamabad" , ContactName:"Fawad" , ContactEmail:"Fawad@gmail.com" , ContactNumber:"0333 4848484"},
    { ClearingAgentCode: "790", ClearingAgentName: "Fawad", Address: "East Express Road" , ContactName:"Fawad" , ContactEmail:"Fawad@gmail.com" , ContactNumber:"0333 4848484"},
  ];
  
  ngOnInit(): void {
  }

}

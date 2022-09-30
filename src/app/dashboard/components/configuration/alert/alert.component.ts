import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertmodalComponent } from './alertmodal/alertmodal.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  closeModal!: String

  constructor(private modalService: NgbModal,) { }
  
  
  open() {
    const modalRef = this.modalService.open(AlertmodalComponent);
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


  columnDefs = [{ field: "MaturityDate" },
  { field: "Demurragefreedays" },
   { field: "Detentionfreedays" },
   { field: "ETAAlert" },
    { field: "Action" }];

 rowData = [
   { MaturityDate: "05-Oct-2021", Demurragefreedays: 2, Detentionfreedays: 9 , ETAAlert:"Ok" ,},
   { MaturityDate: "05-Oct-2021", Demurragefreedays: -5, Detentionfreedays: -1 , ETAAlert:"Demurrage" , },
   { MaturityDate: "05-Oct-2021", Demurragefreedays: 2, Detentionfreedays: 9 , ETAAlert:"Ok" ,},
 ];

  ngOnInit(): void {
  }

}

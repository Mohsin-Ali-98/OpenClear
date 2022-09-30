import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationmodalComponent } from './locationmodal/locationmodal.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

 
  closeModal!: String

  constructor(private modalService: NgbModal,) { }
  
  
  open() {
    const modalRef = this.modalService.open(LocationmodalComponent);
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


  columnDefs = [{ field: "LocationCode" },
  { field: "LocationType" },
   { field: "LocationName" },
   { field: "LocationAddress" },
    { field: "Action" }];

 rowData = [
   { LocationCode: "123", LocationType: "Box", LocationName: "76we8d" , LocationAddress:"2332" },
   { LocationCode: "789", LocationType: "Box", LocationName: "76we8d" , LocationAddress:"3423" },
   { LocationCode: "790", LocationType: "Box", LocationName: "76we8d" , LocationAddress:"2332" ,},
 ];

  ngOnInit(): void {
  }

}
 
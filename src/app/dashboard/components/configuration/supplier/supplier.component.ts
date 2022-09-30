import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuppliermodalComponent } from './suppliermodal/suppliermodal.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  closeModal!: String

  constructor(private modalService: NgbModal,) { }
  
  
  open() {
    const modalRef = this.modalService.open(SuppliermodalComponent);
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

  columnDefs = [{ field: "SupplierCode" },
  { field: "SupplierName" },
   { field: "Address" },
   { field: "ContactName" },
    { field: "ContactEmail" },
    { field: "ContactNumber" }, 
    { field: "Action" }];

 rowData = [
   { SupplierCode: "123", SupplierName: "Hassan", Address: "North Nazimabad Karachi" , ContactName:"Hassan" , ContactEmail:"Hassan@gmail.com" , ContactNumber:"0333 4848484"},
   { SupplierCode: "789", SupplierName: "Fawad", Address: "North Margalla Islamabad" , ContactName:"Fawad" , ContactEmail:"Fawad@gmail.com" , ContactNumber:"0333 4848484"},
   { SupplierCode: "790", SupplierName: "Fawad", Address: "East Express Road" , ContactName:"Fawad" , ContactEmail:"Fawad@gmail.com" , ContactNumber:"0333 4848484"},
 ];

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BankmodalComponent } from './bankmodal/bankmodal.component';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {


  closeModal!: String

  constructor(private modalService: NgbModal,) { }
  
  
  open() {
    const modalRef = this.modalService.open(BankmodalComponent);
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

  columnDefs = [{ field: "BankCode" },
  { field: "IBAN" },
   { field: "BankName" },
   { field: "BankAddress" },
    { field: "ContactName" },
    { field: "ContactEmail" },
    { field: "ContactNumber" }, 
    { field: "Action" }];

 rowData = [
   { BankCode: "123", IBAN: "Hassan",BankName:"Askari Bank", BankAddress: "North Nazimabad Karachi" , ContactName:"Hassan" , ContactEmail:"Hassan@gmail.com" , ContactNumber:"0333 4848484"},
   { BankCode: "789", IBAN: "Fawad",BankName:"Askari Bank", BankAddress: "North Margalla Islamabad" , ContactName:"Fawad" , ContactEmail:"Fawad@gmail.com" , ContactNumber:"0333 4848484"},
   { BankCode: "790", IBAN: "Fawad", BankName:"Askari Bank",BankAddress: "East Express Road" , ContactName:"Fawad" , ContactEmail:"Fawad@gmail.com" , ContactNumber:"0333 4848484"},
 ];
  ngOnInit(): void {
  }

}

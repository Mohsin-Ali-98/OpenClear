import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersmodalComponent } from './usersmodal/usersmodal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  closeModal!: String

  constructor(private modalService: NgbModal,) { }
  
  
  open() {
    const modalRef = this.modalService.open(UsersmodalComponent);
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


  columnDefs = [{ field: "UserEmailAddress" },
  { field: "UserName" },
   { field: "Role" },
    { field: "Action" }];

 rowData = [
   { UserEmailAddress: "123", UserName: "Hassan", Role: "North Nazimabad Karachi"},
   { UserEmailAddress: "789", UserName: "Fawad", Role: "North Margalla Islamabad"},
   { UserEmailAddress: "790", UserName: "Fawad", Role: "East Express Road"},
 ];
  ngOnInit(): void { 
  }

}

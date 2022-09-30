import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MaterailmodalComponent } from './materailmodal/materailmodal.component';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {


  closeModal!: String

  constructor(private modalService: NgbModal,) { }
  
  
  open() {
    const modalRef = this.modalService.open(MaterailmodalComponent);
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

  columnDefs = [{ field: "MaterialCode" },
  { field: "MaterialName" },
   { field: "HSCode" },
   { field: "Uom" },
    { field: "Action" },];

 rowData = [
   { MaterialCode: "123", MaterialName: "Box", HSCode: "76we8d" , Uom:"2332" ,},
   { MaterialCode: "789", MaterialName: "Box", HSCode: "76we8d" , Uom:"3423" , },
   { MaterialCode: "790", MaterialName: "Box", HSCode: "76we8d" , Uom:"2332" , } ];
  
  ngOnInit(): void {
  }

}

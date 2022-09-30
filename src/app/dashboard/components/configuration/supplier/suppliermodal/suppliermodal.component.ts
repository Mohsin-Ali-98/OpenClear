import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-suppliermodal',
  templateUrl: './suppliermodal.component.html',
  styleUrls: ['./suppliermodal.component.css']
})
export class SuppliermodalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

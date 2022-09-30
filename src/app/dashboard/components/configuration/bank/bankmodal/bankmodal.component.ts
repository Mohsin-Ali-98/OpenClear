import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bankmodal',
  templateUrl: './bankmodal.component.html',
  styleUrls: ['./bankmodal.component.css']
})
export class BankmodalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}

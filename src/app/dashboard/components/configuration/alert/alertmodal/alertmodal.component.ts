import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alertmodal',
  templateUrl: './alertmodal.component.html',
  styleUrls: ['./alertmodal.component.css']
})
export class AlertmodalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}

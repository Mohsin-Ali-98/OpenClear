import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-materailmodal',
  templateUrl: './materailmodal.component.html',
  styleUrls: ['./materailmodal.component.css']
})
export class MaterailmodalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-locationmodal',
  templateUrl: './locationmodal.component.html',
  styleUrls: ['./locationmodal.component.css']
})
export class LocationmodalComponent implements OnInit {

 
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
 
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usersmodal',
  templateUrl: './usersmodal.component.html',
  styleUrls: ['./usersmodal.component.css']
})
export class UsersmodalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}

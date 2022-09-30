import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agentmodal',
  templateUrl: './agentmodal.component.html',
  styleUrls: ['./agentmodal.component.css']
})
export class AgentmodalComponent implements OnInit {

  @Input() my_modal_title: any;
  @Input() my_modal_content: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}

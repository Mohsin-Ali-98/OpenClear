import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridserviceService {

  private PreviousDate = new BehaviorSubject('Date not editted!');
  currentApprovalStageMessage = this.PreviousDate.asObservable();
 
  constructor() {
 
  }
  updateApprovalMessage(message: string) {
  this.PreviousDate.next(message)
  
  }
}

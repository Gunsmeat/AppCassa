import { Component } from '@angular/core';
import { AccCnt } from '../../_support/index';
import { ServicesRest } from '../../_services/services.rest';

@Component({
  moduleId: module.id,
  selector: 'counters',
  templateUrl: 'counters.component.html',
  styleUrls: ['counters.component.css']
})
export class CountersComponent {
  accId: string;
  accCnt: AccCnt[];
  errorMessage: string;

  constructor(private servicesRest: ServicesRest) {
  }

  getAccCnt(accId: string) {
    this.accId = accId;
    this.servicesRest.getAccCnt(accId)
      .subscribe(AccCnt => {
          this.accCnt = AccCnt;
          console.error(this.accCnt)
        },
        error => this.errorMessage = <any> error
      );
  }
}

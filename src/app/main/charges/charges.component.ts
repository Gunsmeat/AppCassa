import { Component } from '@angular/core';
import { AccChr } from '../../_support/index';
import { ServicesRest } from '../../_services/services.rest';

@Component({
  moduleId: module.id,
  selector: 'charges',
  templateUrl: 'charges.component.html',
  styleUrls: ['charges.component.css']
})
export class ChargesComponent {
  accId: string;
  accChr: AccChr[];
  errorMessage: string;

  constructor(private servicesRest: ServicesRest) {
  }

  getAccChr(accId: string) {
    this.accId = accId;
    this.servicesRest.getAccChr(accId)
      .subscribe(AccChr => {
          this.accChr = AccChr;
          console.error(this.accChr)
        },
        error => this.errorMessage = <any> error
      );
  }
}

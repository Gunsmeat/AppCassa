import { Component } from '@angular/core';
import { AccRecalc } from '../../_support/index';
import { ServicesRest } from '../../_services/services.rest';

@Component({
  moduleId: module.id,
  selector: 'recalculations',
  templateUrl: 'recalculations.component.html',
  styleUrls: ['recalculations.component.css']
})
export class RecalculationsComponent {
  accId: string;
  accRecalc: AccRecalc[];
  errorMessage: string;

  constructor(private servicesRest: ServicesRest) {
  }

  getAccRecalc(accId: string) {
    this.accId = accId;
    this.servicesRest.getAccRecalc(accId)
      .subscribe(AccRecalc => {
          this.accRecalc = AccRecalc;
          console.error(this.accRecalc)
        },
        error => this.errorMessage = <any> error
      );
  }
}
